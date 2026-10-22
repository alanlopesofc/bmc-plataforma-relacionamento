/* Dados 100% fictícios (regra 7). Pontos, metas e cotas: [HIPÓTESE] até o Gate A. O front só exibe; nada é calculado aqui no navegador. */
window.BMC_DATA = {
 "customer": {
  "name": "Felipe Cavalieri",
  "company": "Cavalieri Terraplenagem (fictícia)",
  "user": "Felipe Cavalieri",
  "initials": "FC",
  "greeting": "Bom dia",
  "unread": 2
 },
 "tierNames": {
  "start": "START",
  "select": "SELECT",
  "private": "PRIVATE"
 },
 "hypothesisNote": "Pontos, metas e cotas são fictícios e [HIPÓTESE] até o Gate A.",
 "byTier": {
  "start": {
   "levelLabel": "START",
   "indicators": {
    "points": {
     "value": "640",
     "hint": "+60 neste mês"
    },
    "fleet": {
     "value": "2",
     "hint": "máquinas ativas"
    },
    "tickets": {
     "value": "1",
     "hint": "1 com prioridade"
    },
    "maintenance": {
     "value": "100%",
     "hint": "revisões em dia"
    }
   },
   "chart": {
    "months": [
     "Jan",
     "Fev",
     "Mar",
     "Abr",
     "Mai",
     "Jun",
     "Jul",
     "Ago",
     "Set",
     "Out",
     "Nov",
     "Dez"
    ],
    "accumulated": [
     40,
     95,
     155,
     225,
     275,
     340,
     420,
     490,
     580,
     640,
     null,
     null
    ],
    "goal": [
     125,
     250,
     375,
     500,
     625,
     750,
     875,
     1000,
     1125,
     1250,
     1375,
     1500
    ],
    "goalLabel": "Meta para o SELECT (1.500 pts) [HIPÓTESE]",
    "gapLabel": "Faltam 860 pontos para o SELECT"
   },
   "fleet": [
    {
     "id": "m1",
     "model": "HX220L",
     "nickname": "Frente Norte",
     "status": "ok",
     "statusLabel": "Revisão em dia",
     "progress": 72,
     "progressLabel": "faltam 140 h para a revisão de 500 h"
    },
    {
     "id": "m2",
     "model": "HL955",
     "nickname": "Pátio de britagem",
     "status": "soon",
     "statusLabel": "Revisão próxima",
     "progress": 91,
     "progressLabel": "em 18 dias"
    }
   ],
   "activity": [
    {
     "id": "a0",
     "kind": "service",
     "text": "Revisão de 500 h no prazo",
     "date": "2026-10-14",
     "points": 30
    },
    {
     "id": "a1",
     "kind": "parts",
     "text": "Compra de peças de manutenção",
     "date": "2026-09-30",
     "points": 30
    },
    {
     "id": "a2",
     "kind": "os",
     "text": "Ordem de serviço concluída",
     "date": "2026-09-12",
     "points": 45
    },
    {
     "id": "a3",
     "kind": "service",
     "text": "Revisão de 250 h no prazo",
     "date": "2026-08-21",
     "points": 45
    },
    {
     "id": "a4",
     "kind": "parts",
     "text": "Compra de peças de manutenção",
     "date": "2026-07-08",
     "points": 70
    }
   ],
   "achievement": {
    "since": "2002-03-15",
    "timeline": [
     {
      "date": "2002-03-15",
      "title": "Entrega da primeira máquina",
      "text": "O dia em que a sua frota BMC começou.",
      "kind": "delivery"
     },
     {
      "date": "2022-03-10",
      "title": "Primeira revisão no prazo",
      "text": "Manutenção em dia desde o começo.",
      "kind": "service"
     },
     {
      "date": "2024-05-22",
      "title": "Segunda máquina na frota",
      "text": "A frota cresceu com a obra.",
      "kind": "delivery"
     },
     {
      "date": "2026-02-01",
      "title": "Nível START reconhecido",
      "text": "Reconhecimento da sua parceria com a BMC.",
      "kind": "level"
     }
    ],
    "certificate": {
     "title": "Certificado de compra",
     "issuedAt": "2002-03-15",
     "machine": "HX220L",
     "text": "A BMC reconhece esta máquina como patrimônio e trabalho de Cavalieri Terraplenagem (fictícia)."
    }
   },
   "score": {
    "nextLevel": {
     "label": "SELECT",
     "gap": "Faltam 860 pontos para o SELECT",
     "progress": 43
    },
    "rules": [
     {
      "rule": "Revisão no prazo",
      "points": "+30 a +150 pts [HIPÓTESE]"
     },
     {
      "rule": "Compra de peças de manutenção",
      "points": "+1 pt a cada R$ 100 [HIPÓTESE]"
     },
     {
      "rule": "Ordem de serviço concluída",
      "points": "+60 pts [HIPÓTESE]"
     }
    ],
    "ledger": [
     {
      "date": "2026-10-14",
      "desc": "Revisão de 500 h no prazo",
      "kind": "service",
      "points": 30,
      "balance": 640
     },
     {
      "date": "2026-09-30",
      "desc": "Compra de peças de manutenção",
      "kind": "parts",
      "points": 30,
      "balance": 610
     },
     {
      "date": "2026-09-12",
      "desc": "Ordem de serviço concluída",
      "kind": "os",
      "points": 45,
      "balance": 580
     },
     {
      "date": "2026-08-21",
      "desc": "Revisão de 250 h no prazo",
      "kind": "service",
      "points": 45,
      "balance": 535
     },
     {
      "date": "2026-07-08",
      "desc": "Compra de peças de manutenção",
      "kind": "parts",
      "points": 70,
      "balance": 490
     }
    ]
   }
  },
  "select": {
   "levelLabel": "SELECT",
   "indicators": {
    "points": {
     "value": "1.920",
     "hint": "+250 neste mês"
    },
    "fleet": {
     "value": "3",
     "hint": "máquinas ativas"
    },
    "tickets": {
     "value": "2",
     "hint": "1 com prioridade"
    },
    "maintenance": {
     "value": "95%",
     "hint": "revisões em dia"
    }
   },
   "chart": {
    "months": [
     "Jan",
     "Fev",
     "Mar",
     "Abr",
     "Mai",
     "Jun",
     "Jul",
     "Ago",
     "Set",
     "Out",
     "Nov",
     "Dez"
    ],
    "accumulated": [
     120,
     270,
     440,
     620,
     780,
     980,
     1190,
     1420,
     1670,
     1920,
     null,
     null
    ],
    "goal": [
     333,
     667,
     1000,
     1333,
     1667,
     2000,
     2333,
     2667,
     3000,
     3333,
     3667,
     4000
    ],
    "goalLabel": "Meta para o PRIVATE (4.000 pts) [HIPÓTESE]",
    "gapLabel": "Faltam 2.080 pontos para o PRIVATE"
   },
   "fleet": [
    {
     "id": "m1",
     "model": "HX220L",
     "nickname": "Frente Norte",
     "status": "ok",
     "statusLabel": "Revisão em dia",
     "progress": 72,
     "progressLabel": "faltam 140 h para a revisão de 500 h"
    },
    {
     "id": "m2",
     "model": "HL955",
     "nickname": "Pátio de britagem",
     "status": "soon",
     "statusLabel": "Revisão próxima",
     "progress": 91,
     "progressLabel": "em 18 dias"
    },
    {
     "id": "m3",
     "model": "HX140L",
     "nickname": "Obra da rodovia",
     "status": "ok",
     "statusLabel": "Revisão em dia",
     "progress": 38,
     "progressLabel": "faltam 310 h para a revisão de 500 h"
    }
   ],
   "activity": [
    {
     "id": "a0",
     "kind": "service",
     "text": "Revisão de 500 h no prazo",
     "date": "2026-10-14",
     "points": 125
    },
    {
     "id": "a1",
     "kind": "parts",
     "text": "Compra de peças de manutenção",
     "date": "2026-09-30",
     "points": 125
    },
    {
     "id": "a2",
     "kind": "os",
     "text": "Ordem de serviço concluída",
     "date": "2026-09-12",
     "points": 125
    },
    {
     "id": "a3",
     "kind": "service",
     "text": "Revisão de 250 h no prazo",
     "date": "2026-08-21",
     "points": 125
    },
    {
     "id": "a4",
     "kind": "parts",
     "text": "Compra de peças de manutenção",
     "date": "2026-07-08",
     "points": 230
    }
   ],
   "achievement": {
    "since": "2002-03-15",
    "timeline": [
     {
      "date": "2002-03-15",
      "title": "Entrega da primeira máquina",
      "text": "O dia em que a sua frota BMC começou.",
      "kind": "delivery"
     },
     {
      "date": "2022-03-10",
      "title": "Primeira revisão no prazo",
      "text": "Manutenção em dia desde o começo.",
      "kind": "service"
     },
     {
      "date": "2024-05-22",
      "title": "Segunda máquina na frota",
      "text": "A frota cresceu com a obra.",
      "kind": "delivery"
     },
     {
      "date": "2026-02-01",
      "title": "Nível SELECT reconhecido",
      "text": "Reconhecimento da sua parceria com a BMC.",
      "kind": "level"
     }
    ],
    "certificate": {
     "title": "Certificado de compra",
     "issuedAt": "2002-03-15",
     "machine": "HX220L",
     "text": "A BMC reconhece esta máquina como patrimônio e trabalho de Cavalieri Terraplenagem (fictícia)."
    }
   },
   "score": {
    "nextLevel": {
     "label": "PRIVATE",
     "gap": "Faltam 2.080 pontos para o PRIVATE",
     "progress": 48
    },
    "rules": [
     {
      "rule": "Revisão no prazo",
      "points": "+30 a +150 pts [HIPÓTESE]"
     },
     {
      "rule": "Compra de peças de manutenção",
      "points": "+1 pt a cada R$ 100 [HIPÓTESE]"
     },
     {
      "rule": "Ordem de serviço concluída",
      "points": "+60 pts [HIPÓTESE]"
     }
    ],
    "ledger": [
     {
      "date": "2026-10-14",
      "desc": "Revisão de 500 h no prazo",
      "kind": "service",
      "points": 125,
      "balance": 1920
     },
     {
      "date": "2026-09-30",
      "desc": "Compra de peças de manutenção",
      "kind": "parts",
      "points": 125,
      "balance": 1795
     },
     {
      "date": "2026-09-12",
      "desc": "Ordem de serviço concluída",
      "kind": "os",
      "points": 125,
      "balance": 1670
     },
     {
      "date": "2026-08-21",
      "desc": "Revisão de 250 h no prazo",
      "kind": "service",
      "points": 125,
      "balance": 1545
     },
     {
      "date": "2026-07-08",
      "desc": "Compra de peças de manutenção",
      "kind": "parts",
      "points": 230,
      "balance": 1420
     }
    ]
   }
  },
  "private": {
   "levelLabel": "PRIVATE",
   "indicators": {
    "points": {
     "value": "4.350",
     "hint": "+460 neste mês"
    },
    "fleet": {
     "value": "4",
     "hint": "máquinas ativas"
    },
    "tickets": {
     "value": "0",
     "hint": "nenhum aberto"
    },
    "maintenance": {
     "value": "100%",
     "hint": "revisões em dia"
    }
   },
   "chart": {
    "months": [
     "Jan",
     "Fev",
     "Mar",
     "Abr",
     "Mai",
     "Jun",
     "Jul",
     "Ago",
     "Set",
     "Out",
     "Nov",
     "Dez"
    ],
    "accumulated": [
     300,
     680,
     1100,
     1550,
     1980,
     2450,
     2930,
     3430,
     3890,
     4350,
     null,
     null
    ],
    "goal": [
     333,
     667,
     1000,
     1333,
     1667,
     2000,
     2333,
     2667,
     3000,
     3333,
     3667,
     4000
    ],
    "goalLabel": "Cota anual para manter o PRIVATE (4.000 pts) [HIPÓTESE]",
    "gapLabel": "Você já superou a cota anual: continue assim"
   },
   "fleet": [
    {
     "id": "m1",
     "model": "HX220L",
     "nickname": "Frente Norte",
     "status": "ok",
     "statusLabel": "Revisão em dia",
     "progress": 72,
     "progressLabel": "faltam 140 h para a revisão de 500 h"
    },
    {
     "id": "m2",
     "model": "HL955",
     "nickname": "Pátio de britagem",
     "status": "soon",
     "statusLabel": "Revisão próxima",
     "progress": 91,
     "progressLabel": "em 18 dias"
    },
    {
     "id": "m3",
     "model": "HX140L",
     "nickname": "Obra da rodovia",
     "status": "ok",
     "statusLabel": "Revisão em dia",
     "progress": 38,
     "progressLabel": "faltam 310 h para a revisão de 500 h"
    },
    {
     "id": "m4",
     "model": "HW160",
     "nickname": "Frente Sul",
     "status": "late",
     "statusLabel": "Revisão atrasada",
     "progress": 100,
     "progressLabel": "atrasada há 6 dias"
    }
   ],
   "activity": [
    {
     "id": "a0",
     "kind": "service",
     "text": "Revisão de 500 h no prazo",
     "date": "2026-10-14",
     "points": 230
    },
    {
     "id": "a1",
     "kind": "parts",
     "text": "Compra de peças de manutenção",
     "date": "2026-09-30",
     "points": 230
    },
    {
     "id": "a2",
     "kind": "os",
     "text": "Ordem de serviço concluída",
     "date": "2026-09-12",
     "points": 230
    },
    {
     "id": "a3",
     "kind": "service",
     "text": "Revisão de 250 h no prazo",
     "date": "2026-08-21",
     "points": 230
    },
    {
     "id": "a4",
     "kind": "parts",
     "text": "Compra de peças de manutenção",
     "date": "2026-07-08",
     "points": 500
    }
   ],
   "achievement": {
    "since": "2002-03-15",
    "timeline": [
     {
      "date": "2002-03-15",
      "title": "Entrega da primeira máquina",
      "text": "O dia em que a sua frota BMC começou.",
      "kind": "delivery"
     },
     {
      "date": "2022-03-10",
      "title": "Primeira revisão no prazo",
      "text": "Manutenção em dia desde o começo.",
      "kind": "service"
     },
     {
      "date": "2024-05-22",
      "title": "Segunda máquina na frota",
      "text": "A frota cresceu com a obra.",
      "kind": "delivery"
     },
     {
      "date": "2026-02-01",
      "title": "Nível PRIVATE reconhecido",
      "text": "Reconhecimento da sua parceria com a BMC.",
      "kind": "level"
     }
    ],
    "certificate": {
     "title": "Certificado de compra",
     "issuedAt": "2002-03-15",
     "machine": "HX220L",
     "text": "A BMC reconhece esta máquina como patrimônio e trabalho de Cavalieri Terraplenagem (fictícia)."
    }
   },
   "score": {
    "nextLevel": {
     "label": null,
     "gap": "Você já superou a cota anual: continue assim"
    },
    "rules": [
     {
      "rule": "Revisão no prazo",
      "points": "+30 a +150 pts [HIPÓTESE]"
     },
     {
      "rule": "Compra de peças de manutenção",
      "points": "+1 pt a cada R$ 100 [HIPÓTESE]"
     },
     {
      "rule": "Ordem de serviço concluída",
      "points": "+60 pts [HIPÓTESE]"
     }
    ],
    "ledger": [
     {
      "date": "2026-10-14",
      "desc": "Revisão de 500 h no prazo",
      "kind": "service",
      "points": 230,
      "balance": 4350
     },
     {
      "date": "2026-09-30",
      "desc": "Compra de peças de manutenção",
      "kind": "parts",
      "points": 230,
      "balance": 4120
     },
     {
      "date": "2026-09-12",
      "desc": "Ordem de serviço concluída",
      "kind": "os",
      "points": 230,
      "balance": 3890
     },
     {
      "date": "2026-08-21",
      "desc": "Revisão de 250 h no prazo",
      "kind": "service",
      "points": 230,
      "balance": 3660
     },
     {
      "date": "2026-07-08",
      "desc": "Compra de peças de manutenção",
      "kind": "parts",
      "points": 500,
      "balance": 3430
     }
    ]
   }
  }
 },
 "tickets": [
  {
   "id": "CH-1042",
   "priority": true,
   "title": "Vazamento hidráulico no HX220L",
   "machine": "HX220L · Frente Norte",
   "openedAt": "2026-10-20",
   "status": "Técnico a caminho",
   "steps": [
    {
     "label": "Chamado aberto",
     "done": true,
     "at": "20/10, 08:12"
    },
    {
     "label": "Recebido pela BMC",
     "done": true,
     "at": "20/10, 08:20"
    },
    {
     "label": "Técnico a caminho",
     "done": true,
     "at": "21/10, 07:40"
    },
    {
     "label": "Atendimento em andamento",
     "done": false,
     "at": null
    },
    {
     "label": "Concluído",
     "done": false,
     "at": null
    }
   ],
   "note": "Atendimento prioritário. Previsão de chegada hoje à tarde [confirmar com a BMC]."
  },
  {
   "id": "CH-1036",
   "priority": false,
   "title": "Dúvida sobre o plano de revisão do HL955",
   "machine": "HL955 · Pátio de britagem",
   "openedAt": "2026-10-09",
   "status": "Concluído",
   "steps": [
    {
     "label": "Chamado aberto",
     "done": true,
     "at": "09/10, 10:02"
    },
    {
     "label": "Recebido pela BMC",
     "done": true,
     "at": "09/10, 10:15"
    },
    {
     "label": "Atendimento em andamento",
     "done": true,
     "at": "09/10, 14:30"
    },
    {
     "label": "Concluído",
     "done": true,
     "at": "10/10, 09:00"
    }
   ],
   "note": "Respondido pelo pós-venda."
  }
 ],
 "announcements": [
  {
   "id": "c1",
   "date": "2026-10-18",
   "category": "Peças",
   "title": "Condições especiais em filtros e fluidos",
   "text": "Aproveite as condições de outubro em itens de manutenção preventiva [percentuais a confirmar com a BMC]."
  },
  {
   "id": "c2",
   "date": "2026-10-10",
   "category": "Serviço",
   "title": "Agenda de revisões de fim de ano",
   "text": "Reserve sua revisão antes do período de maior demanda; os horários são limitados."
  },
  {
   "id": "c3",
   "date": "2026-09-28",
   "category": "Plataforma",
   "title": "Sua pontuação agora mostra o que gerou cada ponto",
   "text": "Abra Pontuação para ver, ponto a ponto, o que somou ao seu ano."
  },
  {
   "id": "c4",
   "date": "2026-09-15",
   "category": "Evento",
   "title": "Encontro de clientes da região [data a confirmar]",
   "text": "Conversa técnica e almoço com a equipe BMC [local e data a confirmar com a BMC]."
  }
 ],
 "relationship": {
  "contacts": [
   {
    "role": "Consultor de pós-venda",
    "name": "[nome a confirmar com a BMC]",
    "channel": "WhatsApp e telefone [a confirmar]",
    "hours": "Seg a sex, horário comercial [a confirmar]"
   },
   {
    "role": "Peças",
    "name": "[nome a confirmar com a BMC]",
    "channel": "WhatsApp [a confirmar]",
    "hours": "Seg a sáb [a confirmar]"
   },
   {
    "role": "Chamado prioritário",
    "name": "Central BMC",
    "channel": "Pelo aplicativo",
    "hours": "24 h [a confirmar]"
   }
  ],
  "technician": {
   "city": "Goiânia, GO",
   "distance": "a cerca de 38 km da sua obra [exemplo]",
   "name": "[técnico a confirmar com a BMC]"
  },
  "partners": [
   {
    "name": "Parceiro de lubrificantes [a definir]",
    "benefit": "Condição para clientes BMC [a definir]"
   },
   {
    "name": "Parceiro de pneus [a definir]",
    "benefit": "Condição para clientes BMC [a definir]"
   }
  ]
 }
};
