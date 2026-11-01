/* Telas Comunidade e Academy: iguais nos 3 níveis, só o tema muda. Só exibem o que vem de data.js. */
(function () {
  "use strict";
  var BMC = window.BMC, ic = BMC.icon;
  var TIER_SHORT = { start: "START", select: "SELECT", private: "PRIVATE" };

  function head(id, title, sub) {
    return '<h2 id="' + id + '" tabindex="-1">' + BMC.esc(title) + '</h2><p class="screen-sub">' + BMC.esc(sub) + "</p>";
  }
  function bar(pct, label) {
    return '<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '" aria-label="' + BMC.esc(label) + '"><span style="--progress:' + pct + '%"></span></div>';
  }

  function post(p, ctx) {
    var bmc = p.bmc ? '<div class="cm-bmc">' + ic("shield") + '<div><strong>Resposta da BMC</strong><p>' + ctx.h(p.bmc) + "</p></div></div>" : "";
    return '<article class="card cm-post" data-topic="' + ctx.h(p.topic) + '"><div class="card-body stack">' +
      '<div class="cm-author"><span class="cm-avatar" aria-hidden="true">' + ctx.h(p.initials) + '</span><div class="cm-who"><strong>' + ctx.h(p.author) +
      ' <span class="cm-tier cm-tier-' + p.tier + '">' + TIER_SHORT[p.tier] + '</span></strong><span class="muted">' + ctx.h(p.place) + " · " + ctx.fmtDate(p.date) + "</span></div>" +
      '<span class="badge badge-info">' + ctx.h(p.topic) + "</span></div>" +
      '<h3 class="cm-title">' + ctx.h(p.title) + '</h3><p class="cm-text">' + ctx.h(p.text) + "</p>" +
      '<span class="cm-machine">' + ic("tractor") + "Hyundai " + ctx.h(p.machine) + "</span>" + bmc +
      '<div class="cm-actions"><button class="cm-act" type="button" data-toast="Obrigado por marcar como útil (protótipo)" data-toast-title="Comunidade">' + ic("heart") + "Útil · " + p.useful + '</button>' +
      '<button class="cm-act" type="button" data-toast="As respostas abrem na versão final" data-toast-title="Comunidade">' + ic("message") + p.replies + " respostas</button></div></div></article>";
  }

  BMC.screens.community = function (ctx) {
    var c = ctx.data.community;
    var chips = '<div class="cm-chips" role="group" aria-label="Filtrar por assunto"><button class="cm-chip" type="button" data-filter="all" aria-pressed="true">Todos</button>' +
      c.topics.map(function (t) { return '<button class="cm-chip" type="button" data-filter="' + ctx.h(t) + '" aria-pressed="false">' + ctx.h(t) + "</button>"; }).join("") + "</div>";
    var compose = '<div class="card cm-compose"><div class="card-body stack"><label class="stack"><span class="card-title">Compartilhe com outros clientes</span>' +
      '<textarea class="field sp-textarea" rows="2" placeholder="Uma dica, uma dúvida ou algo que deu certo na sua obra"></textarea></label>' +
      '<div class="cm-compose-foot"><select class="field" aria-label="Assunto">' + c.topics.map(function (t) { return "<option>" + ctx.h(t) + "</option>"; }).join("") + "</select>" +
      '<button class="btn btn-primary" type="button" data-say="Publicação de exemplo. Nada foi enviado (protótipo)." data-say-in="cm-say">Publicar</button></div><p class="say" id="cm-say" role="status"></p></div></div>';
    var side = '<aside class="cm-side stack"><div class="card"><div class="card-body stack"><div class="cm-stat"><strong>' + ctx.h(c.members) + '</strong><span class="muted">' + ctx.h(c.online) + "</span></div></div></div>" +
      '<div class="card"><div class="card-header"><h3 class="card-title">Em alta</h3></div><div class="card-body"><ol class="cm-trend">' +
      c.trending.map(function (t) { return '<li><span class="muted">' + ctx.h(t.tag) + "</span>" + ctx.h(t.title) + "</li>"; }).join("") + "</ol></div></div>" +
      '<div class="card"><div class="card-header"><h3 class="card-title">Combinados</h3></div><div class="card-body"><ul class="cm-rules">' +
      c.rules.map(function (r) { return "<li>" + ic("check") + "<span>" + ctx.h(r) + "</span></li>"; }).join("") + "</ul></div></div></aside>";
    return '<section class="screen" aria-labelledby="cm-title">' + head("cm-title", "Comunidade", "Clientes BMC de todos os níveis trocando o que aprendem no campo: peças, serviços, consumo e operação.") +
      '<div class="cm-layout"><div class="cm-feed stack">' + compose + chips + c.posts.map(function (p) { return post(p, ctx); }).join("") + "</div>" + side + "</div></section>";
  };

  BMC.screens.academy = function (ctx) {
    var a = ctx.data.academy, f = a.featured;
    var stats = a.stats.map(function (s) { return '<div class="card stat"><div class="stat-top"><span>' + ctx.h(s.label) + '</span></div><div class="stat-value">' + ctx.h(s.value) + "</div></div>"; }).join("");
    var featured = '<div class="card ac-featured"><div class="ac-thumb ac-thumb-lg" aria-hidden="true">' + ic("play") + '</div><div class="card-body stack"><span class="ac-tag">' + ctx.h(f.tag) + " · continuar de onde parou</span>" +
      '<h3 class="ac-title-lg">' + ctx.h(f.title) + '</h3><p class="muted">' + ctx.h(f.lesson) + " · " + ctx.h(f.duration) + "</p>" + bar(f.progress, "Progresso do curso") +
      '<button class="btn btn-primary" type="button" data-toast="As aulas abrem na versão final" data-toast-title="Academy">' + ic("play") + " Continuar</button></div></div>";
    var courses = a.courses.map(function (c) {
      var done = c.progress === 100;
      return '<article class="card ac-course"><div class="ac-thumb" aria-hidden="true">' + ic(done ? "check" : "play") + '</div><div class="card-body stack"><span class="ac-tag">' + ctx.h(c.tag) + " · " + ctx.h(c.format) + "</span>" +
        '<h3 class="cm-title">' + ctx.h(c.title) + '</h3><p class="muted">' + c.lessons + " aulas · " + ctx.h(c.duration) + "</p>" +
        (c.progress > 0 ? bar(c.progress, "Progresso: " + c.title) : "") +
        '<div class="ac-foot">' + (done ? '<span class="badge badge-ok">Concluído · certificado</span>' : c.progress > 0 ? '<span class="muted">' + c.progress + "% concluído</span>" : '<span class="muted">Não iniciado</span>') + "</div></div></article>";
    }).join("");
    var live = '<div class="card ac-live"><div class="card-body row"><span class="ac-live-dot" aria-hidden="true"></span><div><strong>' + ctx.h(a.live.title) + '</strong><p class="muted">' + ctx.h(a.live.when) + " · " + ctx.h(a.live.text) + "</p></div>" +
      '<button class="btn" type="button" data-toast="Lembrete de exemplo criado (protótipo)" data-toast-title="Academy">Lembrar</button></div></div>';
    return '<section class="screen" aria-labelledby="ac-title">' + head("ac-title", "Academy", "Treinamentos da BMC para você e seus operadores. Curtos, práticos e com certificado. Cada curso concluído soma +40 pts [HIPÓTESE].") +
      '<div class="grid-4">' + stats + "</div>" + featured + live + '<h3 class="sp-h3">Cursos</h3><div class="ac-grid">' + courses + "</div></section>";
  };
}());
