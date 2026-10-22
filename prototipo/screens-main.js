/* Telas: Início, Minha conquista, Pontuação, Minha frota, Central de relacionamento.
   Só exibem o que vem de data.js: nenhum cálculo de pontos, nível ou meta aqui (calcular coordenadas do SVG é permitido). */
(function () {
  "use strict";
  var BMC = window.BMC, ic = BMC.icon;

  var KIND_ICON = { service: "clipboard", parts: "package", os: "wrench", delivery: "tractor", level: "star" };
  var STATUS_BADGE = { ok: "badge-ok", soon: "badge-soon", late: "badge-late" };

  function badge(m) { return '<span class="badge ' + (STATUS_BADGE[m.status] || "badge-info") + '">' + BMC.esc(m.statusLabel) + "</span>"; }
  function bar(pct, label) {
    return '<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '" aria-label="' + BMC.esc(label) + '"><span style="--progress:' + pct + '%"></span></div>';
  }
  function photo() { return '<div class="machine-photo">' + ic("camera") + "<span>[foto oficial do modelo]</span></div>"; }
  function head(id, title, sub) {
    return '<h2 id="' + id + '" tabindex="-1">' + BMC.esc(title) + "</h2>" + (sub ? '<p class="screen-sub">' + BMC.esc(sub) + "</p>" : "");
  }

  function machineItem(m, big) {
    return '<li class="machine">' +
      '<div class="machine-head"><div><div class="machine-name">Hyundai ' + BMC.esc(m.model) + '</div><div class="machine-nick">' + BMC.esc(m.nickname) + "</div></div>" + badge(m) + "</div>" +
      (big ? photo() : "") +
      bar(m.progress, "Progresso até a próxima revisão: " + m.model) +
      '<div class="machine-nick">' + BMC.esc(m.progressLabel) + "</div></li>";
  }

  /* Gráfico em SVG próprio. Meses sem dado (null) não recebem ponto; a meta é tracejada. */
  function chart(ctx) {
    var c = ctx.t.chart, narrow = window.innerWidth < 640;
    var W = narrow ? 340 : 760, H = narrow ? 230 : 280, L = narrow ? 40 : 46, R = 14, T = 14, B = 30;
    var all = c.goal.concat(c.accumulated.filter(function (v) { return v !== null; }));
    var step = 1000, max = Math.ceil(Math.max.apply(null, all) / step) * step;
    var n = c.months.length;
    function x(i) { return L + (W - L - R) * i / (n - 1); }
    function y(v) { return T + (H - T - B) * (1 - v / max); }
    var grid = "", ticks = 4;
    for (var g = 0; g <= ticks; g++) {
      var val = max * g / ticks, yy = y(val);
      grid += '<line class="chart-grid" x1="' + L + '" x2="' + (W - R) + '" y1="' + yy + '" y2="' + yy + '"/>' +
        '<text class="chart-axis" x="' + (L - 6) + '" y="' + (yy + 4) + '" text-anchor="end">' + ctx.fmtNumber(val) + "</text>";
    }
    var xs = "";
    c.months.forEach(function (m, i) { if (!narrow || i % 2 === 0) xs += '<text class="chart-axis" x="' + x(i) + '" y="' + (H - 8) + '" text-anchor="middle">' + ctx.h(m) + "</text>"; });
    var pts = [], last = -1;
    c.accumulated.forEach(function (v, i) { if (v !== null) { pts.push(x(i).toFixed(1) + "," + y(v).toFixed(1)); last = i; } });
    var area = "M" + pts[0] + " L" + pts.join(" L") + " L" + x(last).toFixed(1) + "," + y(0) + " L" + x(0).toFixed(1) + "," + y(0) + " Z";
    var goal = c.goal.map(function (v, i) { return x(i).toFixed(1) + "," + y(v).toFixed(1); }).join(" ");
    var gid = "areaGrad";
    var rows = c.months.map(function (m, i) {
      return "<tr><th scope=\"row\">" + ctx.h(m) + "</th><td>" + (c.accumulated[i] === null ? "sem dado" : ctx.fmtNumber(c.accumulated[i])) + "</td><td>" + ctx.fmtNumber(c.goal[i]) + "</td></tr>";
    }).join("");
    return '<div class="chart-wrap"><svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + ctx.h("Gráfico de pontuação acumulada no ano contra a meta. " + c.gapLabel) + '">' +
      '<defs><linearGradient id="' + gid + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="var(--chart-1)" stop-opacity=".18"/><stop offset="100%" stop-color="var(--chart-1)" stop-opacity=".02"/></linearGradient></defs>' +
      grid + xs +
      '<path class="chart-area" d="' + area + '" fill="url(#' + gid + ')"/>' +
      '<polyline class="chart-goal" points="' + goal + '"/>' +
      '<polyline class="chart-acc" pathLength="1" points="' + pts.join(" ") + '"/>' +
      '<circle class="chart-dot" r="5" cx="' + x(last).toFixed(1) + '" cy="' + y(c.accumulated[last]).toFixed(1) + '"/></svg></div>' +
      '<div class="legend"><span><i></i>Pontos acumulados</span><span><i class="dash"></i>' + ctx.h(c.goalLabel) + "</span></div>" +
      '<p class="gap-line">' + ctx.h(c.gapLabel) + "</p>" +
      '<table class="sr-only"><caption>Pontos acumulados e meta por mês</caption><thead><tr><th>Mês</th><th>Acumulado</th><th>Meta</th></tr></thead><tbody>' + rows + "</tbody></table>";
  }

  function plaque(ctx) {
    var file = ctx.tier === "start" ? "plaqueta-start-final.png" : ctx.tier === "select" ? "plaqueta-select-final.png" : "plaqueta-private-final.png";
    return '<div class="achievement-plaque" aria-label="Plaquinha Desde 2003 de Felipe Cavalieri"><div class="plaque-image"><img src="img/' + file + '" alt="Plaquinha ' + ctx.tier.toUpperCase() + ' com gravação BMC" aria-hidden="true"></div></div>';
  }

  BMC.screens.home = function (ctx) {
    var i = ctx.t.indicators;
    var stats = [
      ["Pontos no ano", i.points, "trending"], ["Máquinas na frota", i.fleet, "tractor"],
      ["Chamados abertos", i.tickets, "wrench"], ["Manutenção em dia", i.maintenance, "check"]
    ].map(function (s) {
      var raw = String(s[1].value), numeric = raw.replace(/\D/g, ""), suffix = raw.indexOf("%") > -1 ? "%" : "";
      return '<div class="card stat"><div class="stat-top"><span>' + ctx.h(s[0]) + "</span>" + ic(s[2]) + '</div><div class="stat-value" data-count="' + numeric + '" data-suffix="' + suffix + '">0' + suffix + '</div><div class="stat-hint">' + ctx.h(s[1].hint) + "</div></div>";
    }).join("");
    var fleet = ctx.t.fleet.length ? '<ul class="item-list">' + ctx.t.fleet.map(function (m) { return machineItem(m, false); }).join("") + "</ul>" : '<p class="muted">Nenhuma máquina cadastrada ainda.</p>';
    var act = '<ul class="item-list">' + ctx.t.activity.map(function (a) {
      return '<li class="activity"><span class="activity-ico">' + ic(KIND_ICON[a.kind] || "clipboard") + '</span><div class="activity-body"><div class="activity-text">' + ctx.h(a.text) + '</div><div class="activity-date">' + ctx.fmtDate(a.date) + '</div></div><span class="pts">+' + ctx.fmtNumber(a.points) + " pts</span></li>";
    }).join("") + "</ul>";
    return '<section class="screen" aria-labelledby="home-title">' + head("home-title", "Início") +
      '<div class="grid-4">' + stats + "</div>" +
      '<div class="card"><div class="card-header"><h3 class="card-title">Sua pontuação no ano</h3><p class="card-desc">O que já foi reconhecido e a meta do seu nível. Valores fictícios [HIPÓTESE].</p></div><div class="card-body">' + chart(ctx) + "</div></div>" +
      '<div class="grid-2"><div class="card"><div class="card-header"><h3 class="card-title">Minha frota</h3><p class="card-desc">Progresso até a próxima revisão</p></div><div class="card-body">' + fleet + "</div></div>" +
      '<div class="card"><div class="card-header"><h3 class="card-title">O que gerou seus pontos</h3><p class="card-desc">Últimos reconhecimentos</p></div><div class="card-body">' + act + "</div></div></div></section>";
  };

  BMC.screens.achievement = function (ctx) {
    var a = ctx.t.achievement, cert = a.certificate;
    var tl = '<ol class="timeline">' + a.timeline.map(function (e) {
      return "<li><time datetime=\"" + ctx.h(e.date) + "\">" + ctx.fmtDate(e.date) + "</time><h3>" + ctx.h(e.title) + '</h3><p class="muted">' + ctx.h(e.text) + "</p></li>";
    }).join("") + "</ol>";
    return '<section class="screen" aria-labelledby="ach-title">' + head("ach-title", "Minha conquista", "Cliente BMC desde 2003.") + '<p class="founder-seal">Desde 2003 · o ano em que a BMC nasceu</p>' +
      '<div class="grid-2"><div class="card"><div class="card-header"><h3 class="card-title">Linha do tempo</h3></div><div class="card-body">' + tl + "</div></div>" +
      '<div class="card"><div class="card-header"><h3 class="card-title">' + ctx.h(cert.title) + '</h3><p class="card-desc">Emitido em ' + ctx.fmtDate(cert.issuedAt) + '</p></div>' +
      '<div class="cert">' + BMC.logo(ctx.tier, "cert") + plaque(ctx) + '<div class="cert-title">Hyundai ' + ctx.h(cert.machine) + '</div><p class="muted">' + ctx.h(cert.text) + "</p>" +
      '<button class="btn btn-primary" type="button" data-toast="Certificado disponível na versão final" data-toast-title="Certificado" data-say="Disponível na versão final." data-say-in="cert-say">' + ic("download") + " Baixar certificado</button>" +
      '<p class="say" id="cert-say" role="status"></p></div></div></div></section>';
  };

  BMC.screens.score = function (ctx) {
    var s = ctx.t.score;
    var rules = s.rules.map(function (r) { return '<div class="rule"><span>' + ctx.h(r.rule) + '</span><strong>' + ctx.h(r.points) + "</strong></div>"; }).join("");
    var ledger = s.ledger.map(function (r) {
      return '<div class="ledger-row"><span>' + ctx.h(r.desc) + '</span><span class="pts">+' + ctx.fmtNumber(r.points) + ' pts</span><small>' + ctx.fmtDate(r.date) + '</small><small>Saldo ' + ctx.fmtNumber(r.balance) + "</small></div>";
    }).join("");
    var next = s.nextLevel.label
      ? '<p><strong>Próximo nível: ' + ctx.h(s.nextLevel.label) + '</strong></p><p class="muted">' + ctx.h(s.nextLevel.gap) + "</p>"
      : '<p><strong>Você está no nível mais alto.</strong></p><p class="muted">' + ctx.h(s.nextLevel.gap) + "</p>";
    return '<section class="screen" aria-labelledby="score-title">' + head("score-title", "Pontuação", "Cada ponto tem uma origem. Valores fictícios [HIPÓTESE].") +
      '<div class="card"><div class="card-header"><h3 class="card-title">Para o próximo nível</h3></div><div class="card-body stack">' + next + (s.nextLevel.progress != null ? bar(s.nextLevel.progress, "Progresso até o próximo nível") : "") + "</div></div>" +
      '<div class="grid-2"><div class="card"><div class="card-header"><h3 class="card-title">Como sua pontuação soma</h3></div><div class="card-body">' + rules + "</div></div>" +
      '<div class="card"><div class="card-header"><h3 class="card-title">Extrato descrito</h3></div><div class="card-body">' + ledger + "</div></div></div></section>";
  };

  BMC.screens.fleet = function (ctx) {
    var list = ctx.t.fleet.length ? '<ul class="machines-big" style="list-style:none;margin:0;padding:0">' + ctx.t.fleet.map(function (m) {
      return '<li class="card"><div class="card-body">' + machineItem(m, true).replace(/^<li class="machine">/, '<div class="machine">').replace(/<\/li>$/, "</div>") + "</div></li>";
    }).join("") + "</ul>" : '<p class="muted">Nenhuma máquina cadastrada ainda.</p>';
    return '<section class="screen" aria-labelledby="fleet-title">' + head("fleet-title", "Minha frota", "Revisões e progresso de cada máquina.") + list + "</section>";
  };

  BMC.screens.relationship = function (ctx) {
    var r = ctx.data.relationship;
    var contacts = r.contacts.map(function (c) {
      return '<div class="contact"><strong>' + ctx.h(c.role) + "</strong><span>" + ctx.h(c.name) + '</span><span class="muted">' + ctx.h(c.channel) + " · " + ctx.h(c.hours) + "</span></div>";
    }).join("");
    var partners = r.partners.map(function (p) { return '<div class="contact"><strong>' + ctx.h(p.name) + '</strong><span class="muted">' + ctx.h(p.benefit) + "</span></div>"; }).join("");
    var tech = r.technician;
    return '<section class="screen" aria-labelledby="rel-title">' + head("rel-title", "Central de relacionamento", "Quem fala com você na BMC e quem está perto da sua obra.") +
      '<div class="grid-2"><div class="card"><div class="card-header"><h3 class="card-title">Contatos BMC</h3></div><div class="card-body">' + contacts + "</div></div>" +
      '<div class="card"><div class="card-header"><h3 class="card-title">Técnico mais próximo</h3><p class="card-desc">Exemplo fictício, sem localização real.</p></div><div class="card-body stack">' +
      '<div class="row">' + ic("pin") + "<span><strong>" + ctx.h(tech.name) + "</strong><br>" + ctx.h(tech.city) + " · " + ctx.h(tech.distance) + "</span></div>" +
      '<button class="btn" type="button" data-say="Exemplo: usaríamos a posição do celular só com a sua permissão." data-say-in="geo-say">' + ic("pin") + " Usar minha localização</button>" +
      '<label class="stack"><span class="muted">Ou escolha a cidade</span><input class="field" type="text" placeholder="Ex.: Goiânia, GO" autocomplete="off"></label>' +
      '<button class="btn" type="button" data-say="Exemplo fictício: técnico mais próximo em Goiânia, GO [a confirmar com a BMC]." data-say-in="geo-say">Buscar técnico</button>' +
      '<p class="say" id="geo-say" role="status"></p></div></div></div>' +
      '<div class="card"><div class="card-header"><h3 class="card-title">Parceiros</h3></div><div class="card-body">' + partners + "</div></div></section>";
  };
}());
