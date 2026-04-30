window.PORTFOLIO_CONTENT = window.PORTFOLIO_CONTENT || {};
window.PORTFOLIO_CONTENT.lt = {
  meta:{lang:"lt",title:"Denisas Bykovas - Sistemų architektas",screenLabel:"Portfolio · LT"},
  nav:[{href:"#work",label:"darbai"},{href:"#approach",label:"metodas"},{href:"#career",label:"karjera"},{href:"#stack",label:"įrankiai"},{href:"#contact",label:"kontaktai"}],
  languages:[{href:"index.html",label:"EN"},{href:"index.html?lang=lt",label:"LT",active:true},{href:"index.html?lang=ru",label:"RU"}],
  hero:{
    tag:"Galimas bendradarbiavimas · 2026 Q2",
    title:'Projektuoju sistemas,<br><span class="b">kurios&nbsp;negali&nbsp;sustoti</span>.',
    lede:[
      "Sistemos, kuriomis Lietuvos gyventojai deklaruoja mokesčius (EDS4 - VMI), atlieka pervedimus (CENTROlink - Lietuvos bankas) ir valdo reglamentuojamas gamybos linijas. Tai kritinė infrastruktūra, kurios sustojimas tampa svarbiausia ryto naujiena. Ketvirtis amžiaus su .NET. IT mokslų daktaras. .NET Foundation vystytojas nuo 2020 m.",
      "Apsiimu tai, ko kiti vengia: kur susiduria sistemų palikimas, griežtas reguliavimas ir nepajudinamas diegimų grafikas. Projektuoju architektūrą ir išlieku arti veikiančios sistemos, kad priimti sprendimai atlaikytų realybę po starto."
    ],
    primaryCta:"Susitarti dėl skambučio",primaryHref:"https://cal.com/denisas-bykovas",primaryExternal:true,cvCta:"Atsisiųsti CV ↓"
  },
  recognition:[
    {k:"IT mokslų daktaras",v:"Vilniaus universitetas · 2018"},
    {k:".NET Foundation narys",v:"Nuo 2020 m."},
    {k:"Publikuoti tyrimai",v:"IEEE/SPECTS · adaptyvūs algoritmai jūrų eismo analizei"}
  ],
  trust:{kicker:"Manimi pasitiki",rows:[["Valstybinė mokesčių inspekcija","Lietuvos bankas","Vilniaus vandenys"],["Lauresta","Shell PLC","Baltic Amadeus","BDO","Flinke Folk","Reiz Tech","Codigy"]]},
  sectionHeads:{
    work:{kicker:"Darbai / 04",title:"Atrinkti projektai",right:"Nacionalinė ir įmonių apimtis · 2018 - dabar"},
    approach:{kicker:"Metodas",title:"Kaip iš tikrųjų dirbu"},
    career:{kicker:"Karjera",title:"Dvidešimt penkeri metai, trys etapai"},
    stack:{kicker:"Įrankiai",title:"Įrankiai ir technologijos"}
  },
  contact:{
    title:'Jei sistema <span class="b">privalo veikti</span>, pakalbėkime.',
    text:"Architektūros sutartys, konsultacijos ir mažos praktinės įgyvendinimo komandos. Reguliuojama aplinka, sambūvis su senomis sistemomis, nacionalinė arba įmonių apimtis.",
    primaryCta:"Parašyti man",cvCta:"Atsisiųsti CV ↓",
    links:[{k:"El. paštas",v:"bykovas@bykovas.lt",href:"mailto:bykovas@bykovas.lt"},{k:"GitHub",v:"@bykovas",href:"https://github.com/bykovas",external:true},{k:"LinkedIn",v:"denisasbykovas",href:"https://www.linkedin.com/in/denisasbykovas/",external:true},{k:"Vieta",v:"Vilnius · LT · EET"}]
  },
  footer:{text:"Sukurta rūpestingai, be karkasų.",sourceLabel:"Atviras kodas"},
  cvUrl:"assets/files/denisas-bykovas.pdf",
  stats:[
    {v:"10",u:"M+",k:"deklaracijų per metus",c:"EDS4 · VMI"},
    {v:"757",u:"k+",k:"SEPA mokėjimų per dieną",c:"CENTROlink · Lietuvos bankas"},
    {v:"100",u:"+",k:"kasdienių MES naudotojų",c:"LKvitai"},
    {v:"25",u:"metai",k:"su .NET ir sistemų architektūra",c:"Aktyviai nuo 2000 m."},
  ],
  projects:[
    { sector:"GovTech · Nacionalinis", year:"2019 - dabar",
      title:"EDS4 - Elektroninių deklaracijų sistema",
      client:"Valstybinė mokesčių inspekcija · Vyr. architektas",
      desc:"Modulinis nacionalinės mokesčių platformos pakeitimas. Diegimas be prastovos, pritaikytas realaus laiko auditui ir nuolatiniams teisės aktų pokyčiams.",
      metrics:[{k:"Deklaracijų / m.",v:"10M+",hi:true},{k:"Prastova",v:"nulinė",hi:true},{k:"Integracija",v:"tarpžinybinė"}],
      stack:[".NET","MS SQL","Oracle","EDA","CQRS","Azure","OAuth2"]
    },
    { sector:"FinTech · Mokėjimai", year:"2018 - 2022",
      title:"CENTROlink - Nacionaliniai SEPA mokėjimų vartai",
      client:"Lietuvos bankas · Architektas ir integracijų vadovas",
      desc:"Nacionaliniai vartai į Europos mokėjimų infrastruktūrą. Momentiniai SEPA mokėjimai, stebimi reguliatoriaus, įdiegti šalia senųjų procesorių be kritinio perjungimo momento.",
      metrics:[{k:"Operacijų per dieną",v:"757k+",hi:true},{k:"Schemos",v:"RT1 · STEP2"},{k:"Veikimas",v:"24/7"}],
      stack:["SEPA","SWIFT",".NET","Microservices","XAdES","mTLS"]
    },
    { sector:"Gamyba · MES", year:"2021 - dabar",
      title:"LKvitai.MES - gamybos vykdymo sistema",
      client:"LKvitai · Architektas, praktiškai",
      desc:"Įvykiais paremta gamybos vykdymo sistema žaliuzių ir roletų gamintojui. .NET mikroservisai per MQTT, Node-RED srautų orkestravimas, kioskinės sąsajos operatoriams, integruota su ERP ir sandėliu.",
      metrics:[{k:"Operatorių klaidos",v:"−60%",hi:true},{k:"Vėlavimas",v:"min → s"},{k:"Vartotojai / d.",v:"100+"}],
      stack:[".NET","MQTT","Node-RED","Blazor","Vue","Azure","Docker"]
    },
    { sector:"Komunalinės · Embedded", year:"2020 - 2021",
      title:"Bepiločio vandens papildymo stotelės",
      client:"Vilniaus vandenys · Architektas",
      desc:"Įterptinis valdymas ir telemetrija miesto bepilotėms vandens užpylimo stotelėms. Kompiuterinis vaizdo atpažinimas pakraštyje, telemetrija realiu laiku, debesies pusės agregavimas ir prieigos kontrolė.",
      metrics:[{k:"Veikimas",v:"bepilotis",hi:true},{k:"Pakraštys",v:"Linux + CV"},{k:"Telemetrija",v:"real. laiku"}],
      stack:["Embedded Linux","CV","MQTT","Telemetrija"]
    },
  ],
  approach:[
    {n:"01",t:"Sistemos, o ne madingi įrankiai",d:"Architektūra, kurioje sistemų palikimas, reguliavimas ir esama komanda yra realios sąlygos, o ne kliūtys, kurias norisi perrašyti."},
    {n:"02",t:"Atsakomybė už visą grandinę",d:"Nuo serverių logikos iki infrastruktūros ir DevOps. Kuo labiau sprendimas nutolęs nuo veikiančios sistemos, tuo didesnė klaidos rizika."},
    {n:"03",t:"Tikslūs, mažos rizikos sprendimai",d:"Greita priežasčių analizė griežtai reguliuojamoje aplinkoje. „Chirurginiai“ pakeitimai vietoj perrašymo veikiančiose ir stebimose sistemose."},
    {n:"04",t:"Sustiprinta komanda",d:"Ugdau inžinierius iki techninių lyderių. Derinu sprendimus tarp komandų ir mažinu techninę skolą su kiekvienu diegimu, o ne po jo."},
  ],
  career:[
    { y:"2016 - dabar", era:"Dabar", t:"Vyr. architektas, nacionalinė ir įmonių infrastruktūra", o:"Vyriausybė ir įmonės · nepriklausomas / pagal sutartį",
      bullets:["EDS4 - nacionalinė mokesčių platforma, modulinė architektūra šalies apimtimi","SEPA vartai per RT1, STEP2, TARGET, TIPS EBA","Įterptinė telemetrija ir CV bepilotėms komunalinėms stotelėms","Įvykiais paremtas MES, gamybos integracija Azure"],
      stack:["TOGAF",".NET","MS SQL","Oracle","EDA","Azure","K8s"]
    },
    { y:"2014 - 2017", era:"Vadovavimas", t:"Komandos vadovas · Inžinerijos vadybininkas", o:"Flinke Folk AS · Lietuvos biuras",
      bullets:["Sukūriau Vilniaus inžinerijos komandą nuo 0 iki 12","Logistikos ir HR platformos naftos ir dujų klientams","Praktiškai prie architektūros, samdos ir įgyvendinimo"],
      stack:["Agile",".NET","MS SQL","Azure AD"]
    },
    { y:"2004 - 2014", era:"Pamatai", t:"Full-stack ir įmonių programuotojas", o:"BDO · Lauresta · Galeo / Luktarna",
      bullets:["BDO - dokumentų ir procesų automatizavimas Azure ant SharePoint + .NET","Lauresta - savos ERP, 70+ servisų, visa infrastruktūra","Galeo / Luktarna - paskirstytas inventorius ir mokėjimai 400+ degalinių"],
      stack:["C","C#","Java","SQL Server","VMware"]
    },
  ],
  skills:[
    {g:"Architektūra", i:["C4 · BPMN · UML","Mikroservisai","Įvykiais paremta","CQRS · DDD","OAuth2 · JWT","Azure · AWS"]},
    {g:"Backend",      i:[".NET · .NET Core","MS SQL","Oracle PL/SQL","API dizainas","Stebėsena"]},
    {g:"Frontend",     i:["ASP.NET Core MVC","Blazor","React · Vue","WPF"]},
    {g:"DevOps",       i:["CI/CD","Docker · K8s","Proxmox · PBS","Traefik · Caddy","WireGuard · MQTT"]},
  ],
};
