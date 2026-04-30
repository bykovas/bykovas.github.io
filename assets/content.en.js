window.PORTFOLIO_CONTENT = window.PORTFOLIO_CONTENT || {};
window.PORTFOLIO_CONTENT.en = {
  meta:{lang:"en",title:"Denisas Bykovas — System Architect",screenLabel:"Portfolio · EN"},
  nav:[{href:"#work",label:"work"},{href:"#approach",label:"approach"},{href:"#career",label:"career"},{href:"#stack",label:"stack"},{href:"#contact",label:"contact"}],
  languages:[{href:"index.html",label:"EN",active:true},{href:"index.html?lang=lt",label:"LT"}],
  hero:{
    tag:"Available for engagements · Q2 2026",
    title:'Systems architecture for infrastructure <span class="b">that cannot fail</span>.',
    lede:[
      "Architect on the systems Lithuanians use to file taxes (EDS4 — VMI), move money (CENTROlink — Bank of Lithuania), and run regulated production lines — systems that make the morning news if they stop. Twenty-five years on .NET. PhD in Information Technology. .NET Foundation contributor since 2020.",
      "The work is what nobody else wants to own — legacy stitched to regulation stitched to a release calendar that can't slip. I draw the architecture and stay close enough to the running system that the decisions still hold up after the deploy."
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
    work:{kicker:"Work / 04",title:"Selected projects",right:"National & enterprise scale · 2018 — present"},
    approach:{kicker:"Approach",title:"How I actually work"},
    career:{kicker:"Career",title:"Twenty-five years, three eras"},
    stack:{kicker:"Stack",title:"Tools & technologies"}
  },
  contact:{
    title:'If the system has to <span class="b">keep running</span>, we should talk.',
    text:"Two ways to engage. Both start with the same question: what has to keep running, and what breaks if it does not?",
    tracks:[
      {title:"Architecture engagement",text:"Contracts and advisory work. Regulated environments, legacy co-existence, national or enterprise scale. Typical engagement runs 6 months to 3 years.",buttons:[{label:"Book intro call",href:"https://cal.com/denisas-bykovas",primary:true,external:true},{label:"Email",href:"mailto:bykovas@bykovas.lt"}]},
      {title:"Senior / Principal Architect role",text:"Open to full-time, EU-based or remote. Mission-critical .NET, regulated domains, large legacy footprints welcome.",buttons:[{label:"Download CV",href:"assets/files/denisas-bykovas.pdf",external:true},{label:"LinkedIn",href:"https://www.linkedin.com/in/denisasbykovas/",external:true}]}
    ],
    footerLine:"bykovas@bykovas.lt · Vilnius (EET) · Available Q2 2026",
    primaryCta:"Email me",cvCta:"Download CV ↓",
    links:[{k:"Email",v:"bykovas@bykovas.lt",href:"mailto:bykovas@bykovas.lt"},{k:"GitHub",v:"@bykovas",href:"https://github.com/bykovas",external:true},{k:"LinkedIn",v:"denisasbykovas",href:"https://www.linkedin.com/in/denisasbykovas/",external:true},{k:"Location",v:"Vilnius · LT · EET"}]
  },
  footer:{text:"Built with care, not frameworks.",sourceLabel:"View source"},
  cvUrl:"assets/files/denisas-bykovas.pdf",
  stats:[
    {v:"10",u:"M+",k:"tax filings / year",c:"EDS4 · VMI"},
    {v:"757",u:"k+",k:"SEPA payments / day",c:"CENTROlink · Bank of Lithuania"},
    {v:"100",u:"+",k:"daily MES operators",c:"LKvitai"},
    {v:"25",u:"yrs",k:".NET & systems architecture",c:"Active since 2000"},
  ],
  projects:[
    { sector:"National Infrastructure", year:"2019 — present",
      title:"EDS4 — National Tax Declaration Platform",
      client:"State Tax Inspectorate · Lead Architect",
      desc:"Modular replacement of the legacy national tax filing platform — used by every taxpayer and accountant in Lithuania. Built for zero-downtime rollout. Releases the regulator can audit on the wire, and tax law changes that ship without forcing a refactor cycle.",
      metrics:[{k:"Filings / yr",v:"10M+",hi:true},{k:"Rollout design",v:"zero-downtime",hi:true},{k:"Integration",v:"multi-agency"},{k:"Regulatory delivery",v:"continuous"}],
      comment:'TODO: Replace "multi-agency" with exact integrated-agency count if confirmed.',
      stack:[".NET","MS SQL","Oracle","EDA","CQRS","Azure","OAuth2"]
    },
    { sector:"Central Banking Systems", year:"2018 — 2022",
      title:"CENTROlink — National SEPA Payment Gateway",
      client:"Bank of Lithuania · Architect & Integration Lead",
      desc:"Lithuania's national gateway to pan-European payment rails, scaled during its 2018–2022 expansion. Instant and standard SEPA, signed messaging, regulator-observable on every transaction. Deployed alongside the legacy processors — no flag day, no Friday-night switchover.",
      metrics:[{k:"Throughput (2022 avg)",v:"757k+/day",hi:true},{k:"SCT · SDD · SCT Inst · TARGET2",v:"4 rails"},{k:"PSPs connected",v:"148"},{k:"Availability (2022)",v:"99.6%"}],
      stack:["SEPA","SWIFT",".NET","Microservices","XAdES","mTLS"]
    },
    { sector:"Manufacturing · MES", year:"2021 — present",
      title:"LKvitai.MES — Shop-Floor Execution",
      client:"LKvitai · Architect, hands-on",
      desc:"Event-driven manufacturing execution for a window blinds factory. .NET microservices over MQTT, Node-RED orchestration, kiosk UIs for operators, hooked into ERP and warehouse.",
      metrics:[{k:"Operator errors",v:"−60%",hi:true},{k:"Latency",v:"min → sec"},{k:"Daily users",v:"100+"}],
      stack:[".NET","MQTT","Node-RED","Blazor","Vue","Azure","Docker"]
    },
    { sector:"Utilities · Embedded", year:"2020 — 2021",
      title:"Unmanned Water Refill Infrastructure",
      client:"Vilniaus Vandenys · Architect",
      desc:"City-wide embedded system for unmanned drinking-water refill stations across Vilnius. Edge computer vision identifies vehicles, telemetry streams in real time, and control logic stays close to the hardware while aggregation and access sit on the cloud side.",
      metrics:[{k:"Deployed across Vilnius",v:"16 stations",hi:true},{k:"Operation",v:"fully unmanned"},{k:"Vehicle recognition",v:"edge CV"},{k:"Telemetry and control",v:"real-time"}],
      stack:["Embedded Linux","Computer Vision","MQTT","Telemetry"]
    },
  ],
  approach:[
    {n:"01",t:"Systems, not stacks",d:"Architecture that treats legacy, regulation, and the team you actually have as real constraints — not obstacles to refactor away."},
    {n:"02",t:"End-to-end ownership",d:"Backend, integration, DevOps, infrastructure — and a bit of UI when it matters. The further from the running system, the worse my decisions get."},
    {n:"03",t:"Minimal, low-risk fixes",d:"Fast root-cause analysis in regulated environments. Surgical changes over rewrites when the system is already live and observed."},
    {n:"04",t:"Leave the team stronger",d:"Mentor engineers into tech leads. Align decisions across teams, reduce tech debt with each release — not after."},
  ],
  career:[
    { y:"2016 — present", era:"Current", t:"Lead Architect, National & Enterprise Infrastructure", o:"Engaged through direct contracts with public sector and regulated enterprises.",
      intro:"Four nation-scale and enterprise systems — delivered or still running.",
      bullets:["EDS4, national tax filing platform — Lead Architect (VMI)","CENTROlink, national SEPA gateway — Architect & Integration Lead (Bank of Lithuania)","LKvitai.MES, manufacturing execution — Architect","Unmanned utility stations — Architect (Vilniaus Vandenys)"],
      stack:["TOGAF",".NET","MS SQL","Oracle","EDA","Azure","K8s"]
    },
    { y:"2014 — 2017", era:"Leadership", t:"Team Lead · Engineering Manager", o:"Flinke Folk AS · Lithuania office",
      bullets:["Built the Vilnius engineering team from 0 to 12","Logistics and HR platforms for oil & gas clients","Hands-on across architecture, hiring and delivery"],
      stack:["Agile",".NET","MS SQL","Azure AD"]
    },
    { y:"2004 — 2014", era:"Foundations", t:"Full-stack & Enterprise Developer", o:"BDO · Lauresta · Galeo / Luktarna",
      bullets:["BDO — Azure document and process automation on SharePoint + .NET","Lauresta — homegrown ERP, 70+ services, full infrastructure ownership","Galeo / Luktarna — distributed inventory & payments for 400+ gas stations"],
      stack:["C","C#","Java","SQL Server","VMware"]
    },
  ],
  skills:[
    {g:"Architecture", i:["C4 · BPMN · UML","Microservices","Event-driven","CQRS · DDD","OAuth2 · JWT","Azure · AWS"]},
    {g:"Backend",      i:[".NET · .NET Core","MS SQL","Oracle PL/SQL","API design","Observability"]},
    {g:"Frontend",     i:["ASP.NET Core MVC","Blazor","React · Vue","WPF"]},
    {g:"DevOps",       i:["CI/CD","Docker · K8s","Proxmox · PBS","Traefik · Caddy","WireGuard · MQTT"]},
  ],
};
