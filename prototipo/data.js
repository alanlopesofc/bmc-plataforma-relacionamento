/* Dados 100% fictícios (regra 7). Pontos, metas e mínimos: [HIPÓTESE] até o Gate A. O front só exibe; nada é calculado aqui no navegador. */
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
 "hypothesisNote": "Pontos, metas e mínimos são fictícios e [HIPÓTESE] até o Gate A. A pontuação é anual: zera em 1º de janeiro e o total do ano define o nível do ano seguinte.",
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
     100,
     200,
     300,
     400,
     500,
     600,
     700,
     800,
     900,
     1000,
     1100,
     1200
    ],
    "goalLabel": "Meta para subir ao SELECT (1.200 pts/ano) [HIPÓTESE]",
    "gapLabel": "Sem mínimo para manter o START · faltam 560 pontos para o SELECT"
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
    "since": "2003-03-15",
    "timeline": [
     {
      "date": "2003-03-15",
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
     "issuedAt": "2003-03-15",
     "machine": "HX220L",
     "text": "A BMC reconhece esta máquina como patrimônio e trabalho de Cavalieri Terraplenagem (fictícia)."
    }
   },
   "score": {
    "nextLevel": {
     "label": "SELECT",
     "gap": "Faltam 560 pontos para o SELECT (1.200 pts no ano)",
     "progress": 53
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
     },
     {
      "rule": "Curso concluído no Academy",
      "points": "+40 pts [HIPÓTESE]"
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
    ],
    "keep": {
     "title": "Sem pontuação mínima",
     "text": "No START você continua no programa sem meta de pontos. Tudo o que somar conta para subir ao SELECT.",
     "progress": null
    }
   },
   "meter": {
    "current": 640,
    "fill": 53,
    "keep": null,
    "right": "SELECT 1.200",
    "status": "Sem mínimo para manter · faltam 560 para o SELECT",
    "aria": "640 pontos no ano. O START não tem mínimo. Faltam 560 para o SELECT."
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
     208,
     417,
     625,
     833,
     1042,
     1250,
     1458,
     1667,
     1875,
     2083,
     2292,
     2500
    ],
    "goalLabel": "Meta para subir ao PRIVATE (2.500 pts/ano) [HIPÓTESE]",
    "gapLabel": "Permanência no SELECT garantida · faltam 580 pontos para o PRIVATE",
    "keep": [
     83,
     167,
     250,
     333,
     417,
     500,
     583,
     667,
     750,
     833,
     917,
     1000
    ],
    "keepLabel": "Mínimo para manter o SELECT (1.000 pts/ano)"
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
    "since": "2003-03-15",
    "timeline": [
     {
      "date": "2003-03-15",
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
     "issuedAt": "2003-03-15",
     "machine": "HX220L",
     "text": "A BMC reconhece esta máquina como patrimônio e trabalho de Cavalieri Terraplenagem (fictícia)."
    }
   },
   "score": {
    "nextLevel": {
     "label": "PRIVATE",
     "gap": "Faltam 580 pontos para o PRIVATE (2.500 pts no ano)",
     "progress": 77
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
     },
     {
      "rule": "Curso concluído no Academy",
      "points": "+40 pts [HIPÓTESE]"
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
    ],
    "keep": {
     "title": "Mínimo de 1.000 pts no ano",
     "text": "Você já tem 1.920 pts em 2026: o SELECT está garantido para 2027. Abaixo de 1.000, o nível volta ao START.",
     "progress": 100
    }
   },
   "meter": {
    "current": 1920,
    "fill": 77,
    "keep": 40,
    "keepLabel": "mín. 1.000",
    "right": "PRIVATE 2.500",
    "status": "Permanência garantida · faltam 580 para o PRIVATE",
    "aria": "1.920 pontos no ano. Mínimo para manter o SELECT: 1.000. Faltam 580 para o PRIVATE."
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
     417,
     833,
     1250,
     1667,
     2083,
     2500,
     2917,
     3333,
     3750,
     4167,
     4583,
     5000
    ],
    "goalLabel": "Mínimo para manter o PRIVATE (5.000 pts/ano) [HIPÓTESE]",
    "gapLabel": "Faltam 650 pontos para manter o PRIVATE em 2027 · no ritmo atual você chega em novembro"
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
    "since": "2003-03-15",
    "timeline": [
     {
      "date": "2003-03-15",
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
     "issuedAt": "2003-03-15",
     "machine": "HX220L",
     "text": "A BMC reconhece esta máquina como patrimônio e trabalho de Cavalieri Terraplenagem (fictícia)."
    }
   },
   "score": {
    "nextLevel": {
     "label": null,
     "gap": "Para continuar no PRIVATE, some 5.000 pts no ano. Abaixo disso, o nível de 2027 volta a ser SELECT."
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
     },
     {
      "rule": "Curso concluído no Academy",
      "points": "+40 pts [HIPÓTESE]"
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
    ],
    "keep": {
     "title": "Mínimo de 5.000 pts no ano",
     "text": "Você tem 4.350 pts em 2026. Faltam 650 para garantir o PRIVATE em 2027; se não chegar, volta ao SELECT.",
     "progress": 87
    }
   },
   "meter": {
    "current": 4350,
    "fill": 73,
    "keep": 83,
    "keepLabel": "mín. 5.000",
    "right": "mín. 5.000",
    "status": "Faltam 650 para manter o PRIVATE",
    "aria": "4.350 pontos no ano. Mínimo para manter o PRIVATE: 5.000. Faltam 650."
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
 },
 "rulesSummary": [
  {
   "tier": "start",
   "keep": "Sem pontuação mínima",
   "up": "1.200 pts no ano para subir ao SELECT"
  },
  {
   "tier": "select",
   "keep": "Mínimo de 1.000 pts no ano para manter; abaixo disso volta ao START",
   "up": "2.500 pts no ano para subir ao PRIVATE"
  },
  {
   "tier": "private",
   "keep": "Mínimo de 5.000 pts no ano para manter; abaixo disso volta ao SELECT",
   "up": "Nível mais alto"
  }
 ],
 "community": {
  "members": "1.240 clientes",
  "online": "38 online agora",
  "topics": [
   "Peças",
   "Serviços",
   "Consumo",
   "Operação"
  ],
  "rules": [
   "Troque experiência real de campo",
   "Sem venda ou anúncio de terceiros",
   "A equipe técnica BMC acompanha e responde"
  ],
  "trending": [
   {
    "tag": "Consumo",
    "title": "Modo E x modo P no dia a dia"
   },
   {
    "tag": "Peças",
    "title": "Filtro original x paralelo"
   },
   {
    "tag": "Operação",
    "title": "Checklist antes de ligar"
   }
  ],
  "posts": [
   {
    "id": "p1",
    "author": "Marcos A.",
    "initials": "MA",
    "place": "Rio Verde, GO",
    "tier": "select",
    "date": "2026-10-29",
    "topic": "Consumo",
    "title": "O diesel da HX220L caiu depois que ajustei o modo de potência",
    "text": "Passei a usar o modo econômico nas cargas leves e o de potência só no rompedor. Em três semanas a média foi de 18 para cerca de 16 L/h. Alguém já testou na HX260?",
    "machine": "HX220L",
    "useful": 31,
    "replies": 9,
    "bmc": "Boa prática. O modo econômico atende a maior parte das aplicações de carga; vale conferir também a marcha lenta automática. Equipe técnica BMC [exemplo]"
   },
   {
    "id": "p2",
    "author": "Paulo H.",
    "initials": "PH",
    "place": "Cuiabá, MT",
    "tier": "select",
    "date": "2026-10-27",
    "topic": "Operação",
    "title": "Minha rotina de 10 minutos antes de ligar a máquina",
    "text": "Nível de óleo e de líquido de arrefecimento, drenar a água do separador, olhar mangueiras e engraxar os pinos da lança. Colei a lista no vidro da cabine e os operadores passaram a seguir.",
    "machine": "HX260L",
    "useful": 45,
    "replies": 11
   },
   {
    "id": "p3",
    "author": "Juliana R.",
    "initials": "JR",
    "place": "Uberlândia, MG",
    "tier": "private",
    "date": "2026-10-24",
    "topic": "Peças",
    "title": "Filtro de combustível: original x paralelo, o que vi na prática",
    "text": "Testei paralelo em duas máquinas por seis meses. Numa delas o bico injetor precisou de limpeza antes da hora. Voltei para o original e fiz as contas do custo por hora. Compartilho a planilha com quem quiser.",
    "machine": "HL955",
    "useful": 22,
    "replies": 14
   },
   {
    "id": "p4",
    "author": "Sérgio T.",
    "initials": "ST",
    "place": "Anápolis, GO",
    "tier": "start",
    "date": "2026-10-21",
    "topic": "Serviços",
    "title": "Primeira revisão de 250 h: o que deixar pronto para o técnico?",
    "text": "Comprei minha primeira Hyundai e a revisão de 250 h está chegando. Quem já passou por isso: o que vale deixar separado para o atendimento render?",
    "machine": "HX145",
    "useful": 12,
    "replies": 7
   },
   {
    "id": "p5",
    "author": "Ana L.",
    "initials": "AL",
    "place": "Palmas, TO",
    "tier": "start",
    "date": "2026-10-18",
    "topic": "Peças",
    "title": "Dente de caçamba gastando rápido em cascalho",
    "text": "Troquei os dentes há dois meses e já estão no fim. Trabalho em cascalho e laterita. Alguém indica um perfil de dente melhor para esse solo?",
    "machine": "HX220L",
    "useful": 8,
    "replies": 5
   }
  ]
 },
 "academy": {
  "stats": [
   {
    "label": "Cursos concluídos",
    "value": "1"
   },
   {
    "label": "Horas de treino",
    "value": "2,4 h"
   },
   {
    "label": "Certificados",
    "value": "1"
   },
   {
    "label": "Operadores no Academy",
    "value": "3"
   }
  ],
  "featured": {
   "tag": "Operação eficiente",
   "title": "Economia de combustível na prática",
   "lesson": "Aula 4 de 5 · Marcha lenta e tempo de ciclo",
   "progress": 60,
   "duration": "42 min"
  },
  "courses": [
   {
    "tag": "Manutenção",
    "title": "Plano de revisão de 250 h a 2.000 h",
    "lessons": 6,
    "duration": "55 min",
    "progress": 100,
    "format": "Vídeo"
   },
   {
    "tag": "Operação",
    "title": "Inspeção diária em 10 minutos",
    "lessons": 3,
    "duration": "18 min",
    "progress": 0,
    "format": "Vídeo + checklist"
   },
   {
    "tag": "Tecnologia",
    "title": "Como ler o painel e os alertas da Hyundai",
    "lessons": 4,
    "duration": "30 min",
    "progress": 25,
    "format": "Vídeo"
   },
   {
    "tag": "Segurança",
    "title": "Segurança na operação e no transporte",
    "lessons": 5,
    "duration": "40 min",
    "progress": 0,
    "format": "Vídeo"
   },
   {
    "tag": "Gestão",
    "title": "Custo por hora da sua frota",
    "lessons": 4,
    "duration": "35 min",
    "progress": 0,
    "format": "Guia + planilha"
   },
   {
    "tag": "Peças",
    "title": "Desgaste de material rodante: quando trocar",
    "lessons": 3,
    "duration": "24 min",
    "progress": 0,
    "format": "Vídeo"
   }
  ],
  "live": {
   "title": "Ao vivo com a engenharia: sistema hidráulico",
   "when": "Data a confirmar com a BMC",
   "text": "Perguntas dos clientes respondidas pela equipe técnica. Fica gravado no Academy."
  }
 }
};
