window.PORTFOLIO_CONTENT = window.PORTFOLIO_CONTENT || {};
window.PORTFOLIO_CONTENT.en = {
  meta:{lang:"en",title:"Denisas Bykovas - System Architect",screenLabel:"Portfolio · EN"},
  nav:[{href:"#work",label:"work"},{href:"#approach",label:"approach"},{href:"#career",label:"career"},{href:"#stack",label:"stack"},{href:"#contact",label:"contact"},{href:"assets/files/denisas-bykovas.pdf",label:"cv ↗",external:true}],
  languages:[{href:"index.html",label:"EN",active:true},{href:"index.html?lang=lt",label:"LT"},{href:"index.html?lang=ru",label:"RU"}],
  hero:{
    tag:"Available for engagements · from January 2027",
    title:'I architect systems <span class="b">that cannot&nbsp;fail</span>.',
    subtitle:"Lately, the ones with a language model inside.",
    lede:[
      "The systems Lithuanians use to file taxes (EDS4 - VMI), move money (CENTROlink - Bank of Lithuania), and run regulated production lines - systems that make the morning news if they stop. Twenty-five years on .NET. PhD in Information Technology. .NET Foundation contributor since 2020. In 2026 I also designed, built and shipped DEBYKO, a crypto market-data platform with its own MCP server, end to end as a solo founder.",
      "The work is what nobody else wants to own - legacy stitched to regulation stitched to a release calendar that can't slip. I draw the architecture and stay close enough to the running system that the decisions still hold up after the deploy."
    ],
    primaryCta:"Book intro call",primaryHref:"https://cal.com/denisas-bykovas",primaryExternal:true,cvCta:"Download CV ↓"
  },
  recognition:[
    {k:"PhD, Information Technology",v:"Vilniaus universitetas · 2018"},
    {k:".NET Foundation contributor",v:"Since 2020"},
    {k:"Published research",v:"IEEE/SPECTS · adaptive algorithms for maritime traffic"}
  ],
  trust:{kicker:"Trusted by",rows:[["State Tax Inspectorate","Bank of Lithuania","Vilniaus Vandenys"],["Lauresta","Shell plc","Baltic Amadeus","BDO","Flinke Folk","Reiz Tech","Codigy"]]},
  sectionHeads:{
    work:{kicker:"Work / 06",title:"Selected projects",right:"National, enterprise and AI · 2018 - present"},
    approach:{kicker:"Approach",title:"How I actually work"},
    career:{kicker:"Career",title:"Career"},
    stack:{kicker:"Stack",title:"Systems &amp; tools"}
  },
  contact:{
    title:'If the system has to <span class="b">keep running</span>, we should talk.',
    text:"Three ways to engage. All start with the same question: what has to keep running, and what breaks if it does not?",
    tracks:[
      {title:"Tech Lead / Principal Architect role",text:"Full-time, EU, hybrid or remote.",buttons:[{label:"Download CV",href:"assets/files/denisas-bykovas.pdf",external:true},{label:"LinkedIn",href:"https://www.linkedin.com/in/denisasbykovas/",external:true}]},
      {title:"Architecture engagement",text:"Contracts and advisory work. Regulated environments, legacy co-existence, national or enterprise scale. Typical engagement runs 6 months to 3 years.",buttons:[{label:"Book intro call",href:"https://cal.com/denisas-bykovas",primary:true,external:true},{label:"Email",href:"mailto:bykovas@bykovas.lt"}]},
      {title:"AI product &amp; agent tooling",text:'See <a href="https://debyko.com" target="_blank" rel="noopener">DEBYKO</a> and <a href="https://docs.debyko.com/ai" target="_blank" rel="noopener">docs.debyko.com/ai</a> for how I ship MCP servers and agent tooling.',buttons:[]}
    ],
    footerLine:'<a href="mailto:bykovas@bykovas.lt">bykovas@bykovas.lt</a> · <a href="https://github.com/bykovas" target="_blank" rel="noopener">github.com/bykovas</a> · <a href="https://docs.debyko.com" target="_blank" rel="noopener">docs.debyko.com</a> · Vilnius (EET) · Available from January 2027'
  },
  footer:{text:"Built with care, not frameworks.",links:[{label:"GitHub",href:"https://github.com/bykovas",external:true},{label:"LinkedIn",href:"https://www.linkedin.com/in/denisasbykovas/",external:true},{label:"docs.debyko.com",href:"https://docs.debyko.com",external:true},{label:"Available from January 2027"}]},
  cvUrl:"assets/files/denisas-bykovas.pdf",
  projects:[
    { sector:"AI platform", year:"2026 — present",
      title:"DEBYKO — market data for humans and AI agents",
      client:"Founder, sole architect and builder",
      desc:"Perpetual-futures and spot data from 20+ venues stored exactly as published with venue and receive timestamps; stale values flagged with a reason. REST API with point-in-time history and DQL, a query language designed for LLM clients. Agent rules that fire deterministically to Telegram/webhooks. Remote MCP server (OAuth 2.1, 17 tools) listed in the official MCP Registry, Glama and Smithery. Daily Merkle root anchored on Base. Stripe + x402 pay-per-call billing.",
      metrics:[{k:"venues",v:"20+",hi:true},{k:"MCP tools",v:"17",hi:true},{k:"MCP tests",v:"122"},{k:"commits in 2026",v:"1,397"},{k:"ADRs",v:"36"}],
      stack:[".NET","PostgreSQL","MCP","OAuth 2.1","x402 / Base","Claude Code","Codex"]
    },
    { sector:"Banking", year:"2026",
      title:"Open-banking gateway and product-data platform",
      client:"Technical Lead · a regulated Lithuanian bank (NDA) via Baltic Amadeus",
      desc:"PSD2 gateway (OBIE, Berlin Group, mTLS, OAuth2, JWS). Greenfield product-catalog platform — eight .NET 10 microservices on AKS/ArgoCD, three source connectors, event-driven exporter to Azure Service Bus sized for 500k customers in a 30-minute window. Performance programme that removed ~78 ms CPU per request.",
      metrics:[{k:"microservices",v:"8",hi:true},{k:"customers / 30 min",v:"500k",hi:true},{k:"CPU per request",v:"−78 ms"},{k:"environments",v:"6"}],
      stack:[".NET 9/10","ASP.NET Core","PostgreSQL","Azure SQL","AKS","Helm","ArgoCD","PSD2"]
    },
    { sector:"National Infrastructure", year:"2019 - present",
      title:"EDS4 - National Tax Declaration Platform",
      client:"State Tax Inspectorate · Lead Architect",
      desc:"Modular replacement of the legacy national tax filing platform - used by every taxpayer and accountant in Lithuania. Built for zero-downtime rollout. Releases the regulator can audit on the wire, and tax law changes that ship without forcing a refactor cycle.",
      metrics:[{k:"Filings / yr",v:"10M+",hi:true},{k:"Rollout design",v:"zero-downtime",hi:true},{k:"Integration",v:"multi-agency"},{k:"Regulatory delivery",v:"continuous"}],
      comment:'TODO: Replace "multi-agency" with exact integrated-agency count if confirmed.',
      stack:[".NET","MS SQL","Oracle","EDA","CQRS","Azure","OAuth2"]
    },
    { sector:"Central Banking Systems", year:"2018 - 2022",
      title:"CENTROlink - National SEPA Payment Gateway",
      client:"Bank of Lithuania · Architect &amp; Integration Lead",
      desc:"Lithuania's national gateway to pan-European payment rails, scaled during its 2018–2022 expansion. Instant and standard SEPA, signed messaging, regulator-observable on every transaction. Deployed alongside the legacy processors - no flag day, no Friday-night switchover.",
      metrics:[{k:"Throughput (2022 avg)",v:"757k+/day",hi:true},{k:"SCT · SDD · SCT Inst · TARGET2",v:"4 rails"},{k:"PSPs connected",v:"148"},{k:"Availability (2022)",v:"99.6%"}],
      stack:["SEPA","SWIFT",".NET","Microservices","XAdES","mTLS"]
    },
    { sector:"Manufacturing · MES", year:"2021 - present",
      title:"LKvitai.MES - Shop-Floor Execution",
      client:"LKvitai · Architect, hands-on",
      desc:"Event-driven manufacturing execution for a window blinds factory. .NET microservices over MQTT, Node-RED orchestration, kiosk UIs for operators, hooked into ERP and warehouse.",
      metrics:[{k:"Operator errors",v:"−60%",hi:true},{k:"Latency",v:"min → sec"},{k:"Daily users",v:"100+"}],
      stack:[".NET","MQTT","Node-RED","Blazor","Vue","Azure","Docker"]
    },
    { sector:"Utilities · Embedded", year:"2020 - 2021",
      title:"Unmanned Water Refill Infrastructure",
      client:"Vilniaus Vandenys · Architect",
      desc:"City-wide embedded system for unmanned drinking-water refill stations across Vilnius. Edge computer vision identifies vehicles, telemetry streams in real time, and control logic stays close to the hardware while aggregation and access sit on the cloud side.",
      metrics:[{k:"Deployed across Vilnius",v:"16 stations",hi:true},{k:"Operation",v:"fully unmanned"},{k:"Vehicle recognition",v:"edge CV"},{k:"Telemetry and control",v:"real-time"}],
      stack:["Embedded Linux","Computer Vision","MQTT","Telemetry"]
    },
  ],
  approach:[
    {n:"01",t:"Systems, not stacks",d:"Architecture that treats legacy, regulation, and the team you actually have as real constraints - not obstacles to refactor away."},
    {n:"02",t:"End-to-end ownership",d:"Backend, integration, DevOps, infrastructure - and a bit of UI when it matters. The further from the running system, the worse my decisions get."},
    {n:"03",t:"Minimal, low-risk fixes",d:"Fast root-cause analysis in regulated environments. Surgical changes over rewrites when the system is already live and observed."},
    {n:"04",t:"Leave the team stronger",d:"Mentor engineers into tech leads. Align decisions across teams, reduce tech debt with each release - not after."},
    {n:"05",t:"The model proposes, the system decides",d:"LLM output is re-validated by the production parser, replayed offline as golden tests, and never allowed into the order path. Non-deterministic systems ship when they are testable, not when they are impressive."},
  ],
  career:[
    { y:"Jan 2026 – Jan 2027", era:"Banking &amp; Fintech", t:"Technical Lead, Banking &amp; Fintech", o:"UAB Baltic Amadeus · Client: a regulated Lithuanian bank (NDA)",
      bullets:["Technical lead across three delivery streams: open-banking (PSD2) payment gateway, greenfield product-data platform, API-gateway governance — .NET 9/10, Azure, Kubernetes","Architected and delivered eight .NET 10 microservices (AKS/ArgoCD, five environments) with incremental sync from Oracle, MS SQL and REST sources and an event-driven exporter to Azure Service Bus","Ran a 12-task performance programme that removed ~78 ms of CPU per request; implemented X.509 chain validation across several CA hierarchies"],
      stack:[".NET 10","ASP.NET Core","EF Core","PostgreSQL","Azure SQL","AKS","Helm","ArgoCD","PSD2","mTLS","OAuth2"]
    },
    { y:"2026 – present", era:"AI platform", t:"Founder", o:"DEBYKO (MB Debyko)",
      bullets:["Designed, built and shipped solo: market data from 20+ venues, REST API with point-in-time history and DQL, Agent, Arena, daily Merkle anchoring on Base","Remote MCP server (mcp.debyko.com) listed in the official MCP Registry, Glama and Smithery; billing via Stripe and x402 on Base"],
      stack:[".NET","PostgreSQL","MCP","OAuth 2.1","x402 / Base"]
    },
    { y:"2016 - present", era:"National infrastructure", t:"Lead Architect, National &amp; Enterprise Infrastructure", o:"Engaged through direct contracts with public sector and regulated enterprises.",
      intro:"Four nation-scale and enterprise systems - delivered or still running.",
      bullets:["EDS4, national tax filing platform - Lead Architect (VMI)","CENTROlink, national SEPA gateway - Architect &amp; Integration Lead (Bank of Lithuania)","LKvitai.MES, manufacturing execution - Architect","Unmanned utility stations - Architect (Vilniaus Vandenys)"],
      stack:["TOGAF",".NET","MS SQL","Oracle","EDA","Azure","K8s"]
    },
    { y:"2014 - 2017", era:"Team leadership", t:"Team Lead · Engineering Manager", o:"Flinke Folk AS · Lithuania office",
      bullets:["Built the Vilnius engineering team from 0 to 12","Logistics and HR platforms for oil &amp; gas clients","Hands-on across architecture, hiring and delivery"],
      stack:["Agile",".NET","MS SQL","Azure AD"]
    },
    { y:"2004 - 2014", era:"Engineering foundations", t:"Full-stack &amp; Enterprise Developer", o:"BDO · Lauresta · Galeo / Luktarna",
      bullets:["BDO - Azure document and process automation on SharePoint + .NET","Lauresta - homegrown ERP, 70+ services, full infrastructure ownership","Galeo / Luktarna - distributed inventory &amp; payments for 400+ gas stations"],
      stack:["C","C#","Java","SQL Server","VMware"]
    },
  ],
  skills:[
    {g:"Architecture", i:["C4 · BPMN · UML","Microservices","Event-driven","CQRS · DDD","OAuth2 · JWT","Azure · AWS"]},
    {g:"Backend",      i:[".NET · .NET Core","MS SQL","Oracle PL/SQL","API design","Observability"]},
    {g:"Frontend",     i:["ASP.NET Core MVC","Blazor","React · Vue","WPF"]},
    {g:"DevOps",       i:["CI/CD","Docker · K8s","Proxmox · PBS","Traefik · Caddy","WireGuard · MQTT"]},
    {g:"AI &amp; Agents", i:["MCP (remote, OAuth 2.1)","Claude Code","Codex","LLM evaluation (golden replay)","agent tooling","x402"]},
  ],
};
