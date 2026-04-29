window.PORTFOLIO_CONTENT = window.PORTFOLIO_CONTENT || {};
window.PORTFOLIO_CONTENT.en = {
  meta:{lang:"en",title:"Denisas Bykovas — System Architect",screenLabel:"Portfolio · EN"},
  nav:[{href:"#work",label:"work"},{href:"#approach",label:"approach"},{href:"#career",label:"career"},{href:"#stack",label:"stack"},{href:"#contact",label:"contact"}],
  languages:[{href:"index.html",label:"EN",active:true},{href:"index.html?lang=lt",label:"LT"}],
  hero:{
    tag:"Available for engagements · Q2 2026",
    title:'System architecture for software <span class="b">that cannot stop</span>.',
    lede:[
      "I work on software whose outage would be in the news the next morning: national tax filing, SEPA payments, regulated manufacturing, and public utilities. I have worked in and around the .NET ecosystem for twenty-five years.",
      "Most of my work is not shiny. Draw the architecture. Write the integration nobody wants to own. Sit between a fifteen-year-old legacy system and a team that wants to replace it next quarter. In places like that, architecture is not about the trendiest framework. It is about connecting legacy systems, regulation, real people, and real deadlines — and shipping a solution that simply works on Monday morning.",
      "I deliberately work end to end. Backend, integrations, DevOps, on-prem and cloud infrastructure, and when needed — UI. I make my best decisions when I am close to the system that is actually running."
    ],
    primaryCta:"Start a project",cvCta:"Download CV ↓"
  },
  sectionHeads:{
    work:{kicker:"Work / 04",title:"Selected projects",right:"National & enterprise scale · 2018 — present"},
    approach:{kicker:"Approach",title:"How I actually work"},
    career:{kicker:"Career",title:"Twenty-five years, three eras"},
    stack:{kicker:"Stack",title:"Tools & technologies"}
  },
  contact:{
    title:'If the system has to <span class="b">keep running</span>, we should talk.',
    text:"Architecture contracts, advisory engagements, and small hands-on delivery teams. Regulated environments, legacy co-existence, national or enterprise scale.",
    primaryCta:"Email me",cvCta:"Download CV ↓",
    links:[{k:"Email",v:"bykovas@bykovas.lt",href:"mailto:bykovas@bykovas.lt"},{k:"GitHub",v:"@bykovas",href:"https://github.com/bykovas",external:true},{k:"LinkedIn",v:"denisasbykovas",href:"https://www.linkedin.com/in/denisasbykovas/",external:true},{k:"Location",v:"Vilnius · LT · EET"}]
  },
  footer:{text:"Built with care, not frameworks.",sourceLabel:"View source"},
  cvUrl:"assets/files/denisas-bykovas.pdf",
  stats:[
    {v:"10",u:"M+",k:"tax declarations / year",c:"EDS4 · VMI"},
    {v:"500",u:"k+",k:"SEPA payments / day",c:"Bank of Lithuania"},
    {v:"100",u:"+",k:"daily MES operators",c:"LKvitai"},
    {v:"25",u:"yrs",k:".NET & data platforms",c:"Active since 2000"},
  ],
  projects:[
    { sector:"GovTech · National", year:"2019 — present",
      title:"EDS4 — National Tax Declaration Platform",
      client:"State Tax Inspectorate · Lead Architect",
      desc:"Modular replacement of the legacy national tax filing system, used by every taxpayer and accountant in Lithuania. Zero-downtime rollout, regulator-observable, designed to absorb continuous regulatory change.",
      metrics:[{k:"Declarations / yr",v:"10M+",hi:true},{k:"Downtime",v:"zero",hi:true},{k:"Agencies",v:"multiple"}],
      stack:[".NET","MS SQL","Oracle","EDA","CQRS","Azure","OAuth2"]
    },
    { sector:"FinTech · Payments", year:"2018 — 2022",
      title:"National SEPA Payment Gateway",
      client:"Bank of Lithuania · Architect & Integration Lead",
      desc:"National gateway connecting Lithuania to pan-European payment rails. Instant and standard SEPA, signed messaging, regulator-observable, deployed alongside legacy processors with no flag day.",
      metrics:[{k:"Throughput",v:"500k+/day",hi:true},{k:"Rails",v:"RT1 · STEP2"},{k:"Uptime",v:"24/7"}],
      stack:["SEPA","SWIFT",".NET","Microservices","XAdES","mTLS"]
    },
    { sector:"Manufacturing · MES", year:"2021 — present",
      title:"LKvitai.MES — Shop-Floor Execution",
      client:"LKvitai · Architect, hands-on",
      desc:"Event-driven manufacturing execution system for window-blinds production. .NET microservices on MQTT, Node-RED orchestration, kiosk UIs for operators, integrated into ERP and warehouse.",
      metrics:[{k:"Operator errors",v:"−60%",hi:true},{k:"Latency",v:"min → sec"},{k:"Daily users",v:"100+"}],
      stack:[".NET","MQTT","Node-RED","Blazor","Vue","Azure","Docker"]
    },
    { sector:"Utilities · Embedded", year:"2020 — 2021",
      title:"Unmanned Water Refill Stations",
      client:"Vilniaus Vandenys · Architect",
      desc:"Embedded control and telemetry for unmanned refill stations across the city. Edge computer-vision plate recognition, real-time telemetry, cloud-side aggregation and access control.",
      metrics:[{k:"Operation",v:"unmanned",hi:true},{k:"Edge",v:"Linux + CV"},{k:"Telemetry",v:"real-time"}],
      stack:["Embedded Linux","CV","MQTT","Telemetry"]
    },
  ],
  approach:[
    {n:"01",t:"Systems, not stacks",d:"Architecture that treats legacy, regulation, and the team you actually have as real constraints — not obstacles to refactor away."},
    {n:"02",t:"End-to-end ownership",d:"Backend, integration, DevOps, infrastructure — and a bit of UI when it matters. The further from the running system, the worse my decisions get."},
    {n:"03",t:"Minimal, low-risk fixes",d:"Fast root-cause analysis in regulated environments. Surgical changes over rewrites when the system is already live and observed."},
    {n:"04",t:"Leave the team stronger",d:"Mentor engineers into tech leads. Align decisions across teams, reduce tech debt with each release — not after."},
  ],
  career:[
    { y:"2016 — present", era:"Current", t:"System Architect", o:"Government & enterprise · independent / contracted",
      bullets:["EDS4 — national tax platform, modular architecture at country scale","SEPA gateway across RT1, STEP2, TARGET, TIPS EBA","Embedded telemetry & CV for unmanned utility stations","Event-driven MES, shop-floor integration on Azure"],
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
