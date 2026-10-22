/* Telas Chamados e Comunicados (T-608; revisadas pelo 06). Só exibem o que vem de data.js. */
(function () {
  "use strict";
  var BMC = window.BMC = window.BMC || { screens: {} };
  BMC.screens = BMC.screens || {};
  var ic = function (n) { return BMC.icon ? BMC.icon(n) : ""; };

  function ticketStatusBadge(t) {
    var cls = t.status === "Concluído" ? "badge-ok" : (t.priority ? "badge-info" : "badge-soon"), live = t.status === "Em atendimento" ? " badge-attending" : "";
    return '<span class="badge ' + cls + live + '">' + BMC.esc(t.status) + "</span>";
  }

  function steps(list) {
    return '<ol class="sp-steps">' + list.map(function (s) {
      return '<li class="' + (s.done ? "sp-done" : "sp-todo") + '"><span class="sp-step-label">' + BMC.esc(s.label) + "</span>" +
        '<span class="sp-step-at">' + (s.done ? BMC.esc(s.at) : "Aguardando") + "</span></li>";
    }).join("") + "</ol>";
  }

  BMC.screens.tickets = function (ctx) {
    var tickets = ctx.data.tickets || [];
    var main = tickets.filter(function (t) { return t.priority; })[0];
    var others = tickets.filter(function (t) { return t !== main; });
    var models = ctx.t.fleet.map(function (m) { return "<option>Hyundai " + ctx.h(m.model) + " · " + ctx.h(m.nickname) + "</option>"; }).join("");

    var priority = main
      ? '<article class="card sp-priority" aria-labelledby="sp-main-title"><div class="card-header"><div class="row"><span class="badge badge-late">Prioritário</span>' + ticketStatusBadge(main) +
        '<span class="muted">' + ctx.h(main.id) + '</span></div><h3 class="card-title" id="sp-main-title" style="margin-top:8px">' + ctx.h(main.title) + '</h3><p class="card-desc">' + ctx.h(main.machine) + " · aberto em " + ctx.fmtDate(main.openedAt) +
        '</p></div><div class="card-body stack">' + steps(main.steps) + '<p class="muted">' + ctx.h(main.note) + "</p></div></article>"
      : '<div class="card"><div class="card-body muted">Nenhum chamado prioritário aberto.</div></div>';

    var rest = others.length
      ? others.map(function (t) {
          return '<article class="card"><div class="card-body stack"><div class="row" style="justify-content:space-between"><strong>' + ctx.h(t.title) + "</strong>" + ticketStatusBadge(t) +
            '</div><p class="muted">' + ctx.h(t.id) + " · " + ctx.h(t.machine) + " · " + ctx.fmtDate(t.openedAt) + '</p><details class="sp-more"><summary>Ver andamento</summary>' + steps(t.steps) + '<p class="muted">' + ctx.h(t.note) + "</p></details></div></article>";
        }).join("")
      : '<p class="muted">Nenhum outro chamado.</p>';

    var form = '<details class="card sp-new"><summary class="btn btn-primary">' + ic("wrench") + " Abrir novo chamado</summary>" +
      '<div class="card-body stack"><label class="stack"><span>Máquina</span><select class="field">' + models + "</select></label>" +
      '<label class="stack"><span>O que aconteceu?</span><textarea class="field sp-textarea" rows="3" placeholder="Descreva em poucas palavras"></textarea></label>' +
      '<label class="stack"><span>Prioridade</span><select class="field"><option>Normal</option><option>Prioritário: máquina parada</option></select></label>' +
      '<button class="btn btn-primary" type="button" data-say="Chamado de exemplo registrado. Nada foi enviado (protótipo)." data-say-in="sp-say">Enviar chamado</button>' +
      '<p class="say" id="sp-say" role="status"></p></div></details>';

    return '<section class="screen" aria-labelledby="tickets-title"><h2 id="tickets-title" tabindex="-1">Chamados</h2>' +
      '<p class="screen-sub">Acompanhe o atendimento da BMC passo a passo.</p>' + priority + form +
      '<h3 class="sp-h3">Outros chamados</h3>' + rest + "</section>";
  };

  BMC.screens.announcements = function (ctx) {
    var list = (ctx.data.announcements || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    var items = list.length ? list.map(function (a, i) {
      return '<details class="card sp-ann"' + (i === 0 ? " open" : "") + '><summary><span class="badge badge-info">' + ctx.h(a.category) + '</span><span class="sp-ann-title">' + ctx.h(a.title) +
        '</span><span class="muted sp-ann-date">' + ctx.fmtDate(a.date) + '</span></summary><div class="card-body"><p>' + ctx.h(a.text) + "</p></div></details>";
    }).join("") : '<p class="muted">Nenhum comunicado por enquanto.</p>';
    return '<section class="screen" aria-labelledby="announcements-title"><h2 id="announcements-title" tabindex="-1">Comunicados</h2><p class="screen-sub">Novidades da BMC, da mais recente para a mais antiga.</p>' + items + "</section>";
  };
}());
