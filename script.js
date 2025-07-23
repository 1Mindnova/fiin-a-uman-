
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const versesContainer = document.getElementById('verses');

const verses = [
  {start: 0, end: 10, text: `Der Kapitel was ich lese heißt Al Insan, der Mensch und das ist der 76 Kapitel aus dem Kuran.`},
  {start: 10, end: 14, text: `Ich suche Schutz bei Gott, vor dem Teufel der verflucht ist.`},
  {start: 14, end: 17, text: `Und ich Spreche im Namen von Gott, dem Liebevoll und dem Barmherzigen.`},
  {start: 17, end: 21, text: `Caut protecție la Dumnezeu împotriva diavolului, care este blestemat.`},
  {start: 21, end: 24, text: `În Numele lui Dumnezeu, Cel Iubitor, Cel Milostiv.`},
  {start: 27, end: 40, text: `Oare nu a fost pentru om o vreme în care el nu era nici măcar ceva demn de a fi pomenit?`},
  {start: 40, end: 51, text: `Cu adevărat, Noi am creat omul dintr-un amestec de lichide,`},
  {start: 51, end: 57, text: `și l-am făcut auzitor și văzător.`},
  {start: 57, end: 68, text: `Cu adevărat, i-am arătat calea – fie că este recunoscător, fie că o respinge.`},
  {start: 68, end: 80, text: `Cu adevărat, pentru cei care neagă Adevărul am pregătit lanțuri, cătușe și un foc aprins.`},
  {start: 80, end: 92, text: `Cu adevărat, cei evlavioși vor bea din cupe cu băuturi în care este un parfum de nedescris.`},
  {start: 92, end: 102, text: `Din acel izvor beau cei care I-au slujit lui Dumnezeu – dintr-un flux plin și revărsător.`},
  {start: 102, end: 116, text: `Ei își împlinesc făgăduiala și se tem de ziua a cărei groază nu poate fi evitată de nimeni.`},
  {start: 116, end: 127, text: `Și ei oferă hrană – din dragoste pentru Dumnezeu – săracului, orfanului și celui înlănțuit.`},
  {start: 127, end: 144, text: `„Vă hrănim doar de dragul lui Dumnezeu – nu așteptăm de la voi nici răsplată, nici mulțumire.”`},
  {start: 144, end: 153, text: `„Ne temem de o zi de la Creatorul nostru în care va fi greu și anevoios pentru toți.”`},
  {start: 153, end: 165, text: `Astfel, Dumnezeu îi va ocroti de acea zi și le va dărui bucurie în inimi și liniște sufletească.`},
  {start: 165, end: 175, text: `Și, ca răsplată pentru răbdarea lor – (le oferă) Paradisul, cu veșminte din mătase de cea mai înaltă calitate.`},
  {start: 175, end: 188, text: `Ei se odihnesc acolo pe așternuturi înălțate – feriți de orice căldură sau frig.`},
  {start: 188, end: 199, text: `Umbra este aproape de ei, iar fructele atârnă jos, la îndemână.`},
  {start: 199, end: 211, text: `Li se servesc cu tipsii de argint și cupe străvezii din cristal.`},
  {start: 211, end: 220, text: `cristalin și fabricat din argint – în dimensiunea aleasă de tine.`},
  {start: 220, end: 228, text: `Și beau dintr-un pahar cu băutură amestecată cu ghimbir.`},
  {start: 228, end: 237, text: `Dintr-un izvor numit „Salsabīl”.`},
  {start: 237, end: 251, text: `Iar în jurul lor se mișcă tineri veșnici (slujitori) – dacă i-ai vedea, ai crede că sunt perle strălucitoare.`},
  {start: 251, end: 260, text: `Oriunde ai privi acolo, vei vedea desfătare și o măreție de nedescris.`},
  {start: 260, end: 282, text: `Ei poartă veșminte din mătase verde foarte fină și brocart cu modele. Sunt împodobiți cu brățări de argint, iar Domnul lor le oferă spre băut doar ceea ce este mai curat și mai pur.`},
  {start: 282, end: 295, text: `„Cu adevărat, aceasta este răsplata voastră, iar faptele voastre au fost binecuvântate și apreciate.”`},
  {start: 295, end: 304, text: `Noi Ți-am revelat Coranul treptat, vers cu vers. Așadar, fii răbdător până ce înțelepciunea lui Dumnezeu ți se va arăta pe deplin – și nu asculta de cei aroganți sau nepăsători.`},
  {start: 304, end: 314, text: `Și adu-ți aminte de Numele (Atributele) Creatorului tău dimineața și seara,`},
  {start: 314, end: 324, text: `iar în timpul unei părți din noapte, pleacă-ți fruntea în prosternare înaintea Lui și slăvește-I Prezența pentru o vreme – cu sinceritate și umilință.`},
  {start: 324, end: 332, text: `Cu adevărat, acești oameni sunt cei care iubesc ritmul rapid al vieții și trec cu vederea/neglijează ziua, ceea ce va fi incredibil de dificil pentru ei.`},
  {start: 332, end: 349, text: `Noi i-am creat – și tot Noi le-am dăruit ființa lor. Și dacă am vrea, i-am putea înlocui cu alte făpturi – mai vrednice, mai nobile decât ei.`},
  {start: 349, end: 365, text: `Într-adevăr, toate acestea sunt o aducere-aminte și un avertisment. Așadar, oricine voiește cu adevărat, să aleagă calea care duce la Creatorul său.`},
  {start: 365, end: 379, text: `Cum ați fi putut voi să aveți această voință liberă, dacă Dumnezeu n-ar fi voit astfel?`},
  {start: 379, end: 394, text: `Cu adevărat, Dumnezeu este Atoateștiutor și Înțelept în toate lucrurile. El deschide drumul către Mila și Dragostea Sa pentru cei ce o caută cu sinceritate.`},
  {start: 394, end: 413, text: `Iar celor care săvârșesc nedreptăți, El le-a pregătit suferințe amare, grele și neîndurate.`}
];

let currentIndex = -1;

playBtn.addEventListener('click', () => {
  audio.play();
  playBtn.style.display = 'none';
});

function showVerse(index) {
  versesContainer.innerHTML = '';
  const el = document.createElement('div');
  el.className = 'verse visible';
  el.textContent = verses[index].text;
  versesContainer.appendChild(el);
}

audio.ontimeupdate = () => {
  for (let i = 0; i < verses.length; i++) {
    if (audio.currentTime >= verses[i].start && audio.currentTime < verses[i].end) {
      if (i !== currentIndex) {
        currentIndex = i;
        showVerse(i);
      }
      break;
    }
  }
};
