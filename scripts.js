let bengalska = {
    photo: "/images/bengalska-kocka.jpg",
    title: "Bengálská kočka",
    description: "I když se bengálská kočka velmi podobá divoké kočce bengálské, její povaha není agresivní či divoká, spíše aktivní a temperamentní. Mají velmi silný mateřský a lovecký pud, proto není překvapením, že nejlepší hrou je pro ně lov. Snesou se i s jinými kočkami nebo psy, s hlodavci či ptáky se soužití nedoporučuje, přece jen je to šelma. Tyto kočky vyžadují pozornost a dají se i vycvičit, proto se toto plemeno doporučuje zkušeným chovatelům. Potřebují pozornost, větší prostor a velký škrábací kůl."
}
let birma = {
    photo: "/images/birma.jpg",
    title: "Birma",
    description: "Birma je inteligentní, klidné, učenlivé a přizpůsobivé plemeno, postrádající známky agresivity; toleruje i jiná zvířata v domácnosti. Nemá problém v soužití s dětmi. Birma nepatří mezi rezervované, odtažité kočky, které se vyhýbají společnosti. Vyhledává sociální kontakty a hodně přilne ke své lidské rodině. Bývá komunikativní, ale nikoli hlučná tak výrazně, jako třeba kočka siamská."
}
let britka = {
    photo: "/images/britska-kocka.jpg",
    title: "Britská kočka",
    description: "Britská krátkosrstá kočka je naprosto nekomplikované plemeno. Jsou považovány za vyrovnané a přátelské. Zpravidla nejsou žádnými akrobaty, jejich povaha je spíše klidná. Kromě toho tyto kočky nutně potřebují být v blízkosti svých lidí a rády se mazlí. Přesto by se nemělo opomíjet jejich zaměstnání a aktivita. Protože patří k pohodlnějším kočičím plemenům, mají bohužel tendenci k nadváze. Zpočátku jsou vůči cizím lidem rezervovaní, ale zpravidla jsou k návštěvníkům vstřícní."
    }
let habesska = {
    photo: "/images/habesska-kocka.jpg",
    title: "Habešská kočka",
    description: "Habešské kočky jsou extrémně inteligentní zvířata s nevyčerpatelnou energií. Stojí za to poskytnout jim dostatečně velký prostor k šílení, zejména vysoká škrabadla. Rády si hrají, během hry je můžete naučit spoustu triků. Jsou odvážné a zvědavé, mohou krok za krokem sledovat svého opatrovníka a následovat jeho činy. Je to také proto, že jsou velmi společenské. "
}
let mainka = {
    photo: "/images/mainska-myvali-kocka.jpg",
    title: "Mainská mývalí kočka",
    description: "Mainská mývalí kočka je velmi přítulná a mazlivá. Se svou rodinou si často vytváří pevné pouto, ale není na ní závislá - ráda se věnuje i svým vlastním aktivitám. S oblibou si hraje a svou hravost neztrácí ani ve vyšším věku. Pokud je jako kotě seznámena se všemi členy domácnosti, ať už kočkami či psy, mívá pak k nim velmi přátelský vztah. Další výhodou je také její kladný vztah k dětem. Tyto kočky mají rády mazlení, i když samozřejmě existují výjimky. Jsou to kočky spíše klidné, mají společenskou povahu."
}
let ragdoll = {
    photo: "/images/ragdoll.jpg",
    title: "Ragdoll",
    description: "Ragdoll jsou velmi přátelské k lidem, rády se mazlí, jsou extrémně přítulné, hravé, společenské a zvědavé. Vycházejí dobře i s ostatními kočkami. Toto plemeno je schopné dobře snášet samotu. Říká se, že se podobají psům (hlídají si své majitele, snadno se naučí chodit na procházky v postrojku a s oblibou nosí své kočičí hračky – dokáže aportovat). Jsou velice důvěřivé, dokonce i k cizím a díky tomu je možné využívat je při felinoterapii. Kočky velmi rády odpočívají a dají se snadno naučit na domácí prostředí."
}
let siamka = {
    photo: "/images/siamska-kocka.jpg",
    title: "Siamská kočka",
    description: "Siamské kočky chtějí mnohdy laškovat a ne nadarmo jsou označovány jako psi mezi kočkami. Toto označení vzniklo proto, že se tohle plemeno nechá člověkem částečně vycvičit. Ale to nic nemění na skutečnosti, že se naučí pouze tolik, kolik samy uznají za vhodné. Ten, kdo se pokusí naučit něco siamskou kočku násilím, ten se záhy seznámí s jejími drápky. Jedná se o velmi společenské plemeno, které se potřebuje neustále projevovat."
}
let sphynx = {
    photo: "/images/sphynx.jpg",
    title: "Sphynx",
    description: "Kočky sphynx jsou inteligentní, hravé, živé a přítulné. Mnoho z nich se rádo mazlí s ostatními kočkami i s lidmi. Jsou velmi oddaní svým majitelům a obvykle jsou přátelští k ostatním domácím zvířatům, například ke psům. Pokud si chcete pořídit sphynxe, nemělo by Vám vadit, že občas vydává zvuky. Toto plemeno patří k těm upovídanějším. Jejich mňoukání však v žádném případě není hlasité. Často vydávají pouze tiché švitoření."
}
let imagesData = [bengalska, birma, britka, habesska, mainka, ragdoll, siamka, sphynx];
let currentPhoto = 0;
/*$("#photo").attr("src", imagesData[currentPhoto].photo);
$("#photo-title").append(imagesData[currentPhoto].title);
$("#photo-description").append(imagesData[currentPhoto].description);*/

let loadPhoto = (numberPhoto) => {
    $("#photo").attr("src", imagesData[numberPhoto].photo);
    $("#photo-title").text(imagesData[numberPhoto].title);
    $("#photo-description").text(imagesData[numberPhoto].description);
  }

loadPhoto(currentPhoto);
  
$("#right-arrow").click(() => {
   if (currentPhoto >= 7) {
       currentPhoto = 0 
   } 
   else { 
       currentPhoto++
   }
    loadPhoto(currentPhoto);
  });
$("#left-arrow").click(() => {
    if (currentPhoto <= 0) { 
        currentPhoto = 7; 
      }
    else {
        currentPhoto--
    }
    loadPhoto(currentPhoto);
  });







