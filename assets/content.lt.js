window.PORTFOLIO_CONTENT = window.PORTFOLIO_CONTENT || {};
window.PORTFOLIO_CONTENT.lt = {
  meta:{lang:"lt",title:"Denisas Bykovas — Sistemų architektas",screenLabel:"Portfolio · LT"},
  nav:[{href:"#work",label:"darbai"},{href:"#approach",label:"metodas"},{href:"#career",label:"karjera"},{href:"#stack",label:"įrankiai"},{href:"#contact",label:"kontaktai"}],
  languages:[{href:"index.html",label:"EN"},{href:"index.html?lang=lt",label:"LT",active:true},{href:"index.html?lang=ru",label:"RU"}],
  hero:{
    tag:"Priimu projektus · 2026 m. II ketv.",
    title:'Sistemų architektūra programinei įrangai, <span class="b">kuri negali sustoti</span>.',
    lede:[
      "Dirbu su programine įranga, apie kurios sustojimą kitą rytą perskaitytum naujienose: nacionalinis mokesčių deklaravimas, SEPA mokėjimai, reguliuojama gamyba, komunaliniai tinklai. Su .NET ekosistema ir aplink ją dirbu jau dvidešimt penkerius metus.",
      "Didžioji mano darbo dalis nėra blizgi. Nubraižyti architektūrą. Parašyti integraciją, kurios niekas nenori imtis. Atsisėsti tarp penkiolika metų veikiančios senos sistemos ir komandos, kuri nori ją pakeisti per kitą ketvirtį. Tokiose vietose architektūra nėra apie madingiausią karkasą. Ji yra apie gebėjimą sujungti paveldėtas sistemas, reglamentus, realius žmones ir realius terminus — ir paleisti sprendimą, kuris pirmadienio rytą tiesiog veikia.",
      "Sąmoningai dirbu nuo pradžios iki pabaigos. Backend, integracijos, DevOps, infrastruktūra vietoje ir debesyje, o kai reikia — ir UI. Geriausius sprendimus priimu tada, kai esu arti realiai veikiančios sistemos."
    ],
    primaryCta:"Pradėti projektą",cvCta:"Atsisiųsti CV ↓"
  },
  sectionHeads:{
    work:{kicker:"Darbai / 04",title:"Atrinkti projektai",right:"Nacionalinė ir įmonių apimtis · 2018 — dabar"},
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
  footer:{text:"Sukurta rūpestingai, ne karkasais.",sourceLabel:"Atviras kodas"},
  cvUrl:"assets/files/denisas-bykovas.pdf",
  stats:[
    {v:"10",u:"M+",k:"deklaracijų / metus",c:"EDS4 · VMI"},
    {v:"500",u:"k+",k:"SEPA mokėjimų / dieną",c:"Lietuvos bankas"},
    {v:"100",u:"+",k:"MES operatorių / dieną",c:"LKvitai"},
    {v:"25",u:"m.",k:".NET ir duomenys",c:"Nuo 2000 m."},
  ],
  projects:[
    { sector:"GovTech · Nacionalinis", year:"2019 — dabar",
      title:"EDS4 — Elektroninių deklaracijų sistema",
      client:"Valstybinė mokesčių inspekcija · Vyr. architektas",
      desc:"Modulinis nacionalinės mokesčių deklaravimo sistemos pakeitimas. Ja naudojasi visi šalies mokesčių mokėtojai ir buhalteriai. Diegimas be prastovos, stebimas reguliatoriaus, suprojektuotas nuolatiniam reglamentų kitimui.",
      metrics:[{k:"Deklaracijų / m.",v:"10M+",hi:true},{k:"Prastova",v:"nulinė",hi:true},{k:"Įstaigos",v:"kelios"}],
      stack:[".NET","MS SQL","Oracle","EDA","CQRS","Azure","OAuth2"]
    },
    { sector:"FinTech · Mokėjimai", year:"2018 — 2022",
      title:"Nacionalinis SEPA mokėjimų vartai",
      client:"Lietuvos bankas · Architektas ir integracijų vadovas",
      desc:"Nacionaliniai vartai, jungiantys Lietuvą su Europos mokėjimų infrastruktūra. Greitieji ir įprasti SEPA mokėjimai, pasirašytos žinutės, stebimi reguliatoriaus, įdiegti šalia senų procesorių be vienkartinio perjungimo.",
      metrics:[{k:"Pralaidumas",v:"500k+/d.",hi:true},{k:"Schemos",v:"RT1 · STEP2"},{k:"Veikimas",v:"24/7"}],
      stack:["SEPA","SWIFT",".NET","Microservices","XAdES","mTLS"]
    },
    { sector:"Gamyba · MES", year:"2021 — dabar",
      title:"LKvitai.MES — gamybos vykdymo sistema",
      client:"LKvitai · Architektas, praktiškai",
      desc:"Įvykiais paremta gamybos vykdymo sistema žaliuzių ir roletų gamintojui. .NET mikroservisai per MQTT, Node-RED srautų orkestravimas, kioskinės sąsajos operatoriams, integruota su ERP ir sandėliu.",
      metrics:[{k:"Operatorių klaidos",v:"−60%",hi:true},{k:"Vėlavimas",v:"min → s"},{k:"Vartotojai / d.",v:"100+"}],
      stack:[".NET","MQTT","Node-RED","Blazor","Vue","Azure","Docker"]
    },
    { sector:"Komunalinės · Embedded", year:"2020 — 2021",
      title:"Bepiločio vandens užpylimo stotelės",
      client:"Vilniaus vandenys · Architektas",
      desc:"Įterptinis valdymas ir telemetrija miesto bepilotėms vandens užpylimo stotelėms. Kompiuterinis vaizdo atpažinimas pakraštyje, telemetrija realiu laiku, debesies pusės agregavimas ir prieigos kontrolė.",
      metrics:[{k:"Veikimas",v:"bepilotis",hi:true},{k:"Pakraštys",v:"Linux + CV"},{k:"Telemetrija",v:"real. laiku"}],
      stack:["Embedded Linux","CV","MQTT","Telemetrija"]
    },
  ],
  approach:[
    {n:"01",t:"Sistemos, ne stekai",d:"Architektūra, kuri vertina senas sistemas, reglamentus ir realią komandą kaip tikrus apribojimus, o ne kliūtis pakeisti perrašant."},
    {n:"02",t:"Atsakomybė nuo galo iki galo",d:"Backendas, integracijos, DevOps, infrastruktūra — ir šiek tiek UI, kai svarbu. Kuo toliau nuo veikiančios sistemos, tuo prastesni mano sprendimai."},
    {n:"03",t:"Minimalūs, mažos rizikos taisymai",d:"Greita priežasties analizė reguliuojamoje aplinkoje. Chirurginiai pakeitimai vietoje perrašymų, kai sistema jau veikia."},
    {n:"04",t:"Palieku komandą stipresnę",d:"Auginu inžinierius iki tech lead. Suderinu sprendimus tarp komandų, mažinu techninę skolą su kiekvienu leidimu — ne po jo."},
  ],
  career:[
    { y:"2016 — dabar", era:"Dabar", t:"Sistemų architektas", o:"Vyriausybė ir įmonės · nepriklausomas / pagal sutartį",
      bullets:["EDS4 — nacionalinė mokesčių platforma, modulinė architektūra šalies apimtimi","SEPA vartai per RT1, STEP2, TARGET, TIPS EBA","Įterptinė telemetrija ir CV bepilotėms komunalinėms stotelėms","Įvykiais paremtas MES, gamybos integracija Azure"],
      stack:["TOGAF",".NET","MS SQL","Oracle","EDA","Azure","K8s"]
    },
    { y:"2014 — 2017", era:"Vadovavimas", t:"Komandos vadovas · Inžinerijos vadybininkas", o:"Flinke Folk AS · Lietuvos biuras",
      bullets:["Sukūriau Vilniaus inžinerijos komandą nuo 0 iki 12","Logistikos ir HR platformos naftos ir dujų klientams","Praktiškai prie architektūros, samdos ir įgyvendinimo"],
      stack:["Agile",".NET","MS SQL","Azure AD"]
    },
    { y:"2004 — 2014", era:"Pamatai", t:"Full-stack ir įmonių programuotojas", o:"BDO · Lauresta · Galeo / Luktarna",
      bullets:["BDO — dokumentų ir procesų automatizavimas Azure ant SharePoint + .NET","Lauresta — savos ERP, 70+ servisų, visa infrastruktūra","Galeo / Luktarna — paskirstytas inventorius ir mokėjimai 400+ degalinių"],
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
