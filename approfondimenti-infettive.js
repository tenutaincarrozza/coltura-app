/* Coltura – Malattie infettive: flashcard, frasi, abbinamenti e domande in più per ogni capitolo */
var AX=AX||{};
AX["mi:1"]={
fc:[
["Perché le malattie infettive sono una categoria particolare?","Hanno un agente causale specifico: sono le uniche da cui si può guarire completamente."],
["Quali sono i 4 postulati di Koch?","Il germe è presente in ogni caso, si isola in coltura pura, riproduce la malattia in un ospite sano, si reisola identico."],
["Limiti dei postulati di Koch?","Virus non coltivabili, portatori asintomatici, malattie multifattoriali."],
["Perché la stessa infezione dà quadri diversi?","Contano salute dell’ospite, carica infettante, via d’ingresso e risposta immunitaria."],
["Come si comportano i droplet di Flügge?","Superano i 5 µm e cadono entro 1-2 metri."],
["Quali malattie si trasmettono con i droplet nuclei?","Tubercolosi, morbillo, varicella: restano sospesi nell’aria."],
["Come si trasmette l’Ebola?","Per contatto: le goccioline si depositano su cute e mucose, ma non è una trasmissione aerea."],
["Esempi di trasmissione fecale-orale?","HAV, HEV, Salmonella, colera, Shigella (acqua e cibi contaminati)."],
["Cos’è una zoonosi? Esempi?","Infezione trasmessa dall’animale all’uomo: brucellosi, leishmaniosi, rickettsiosi."],
["Differenza tra trasmissione parenterale apparente e inapparente?","Apparente: trasfusioni, siringhe. Inapparente: microlesioni, rasoi, spazzolini."],
["Esempi di trasmissione verticale?","CMV, toxoplasma, rosolia, VZV."],
["Cos’è un’infezione esogena?","Un’infezione da patogeno che arriva dall’esterno."],
["Da cosa dipende l’esito di un’infezione?","Carica infettante, virulenza e tropismo del germe, difese dell’ospite."],
["Differenza tra danno diretto e indiretto?","Diretto: effetto citopatico o tossine. Indiretto: immunomediato (es. HAV, HBV)."],
["Cosa favorisce le resistenze agli antibiotici?","Uso improprio, dosi o durate sbagliate: pressione selettiva; i germi MDR sono tipici dell’ospedale."],
["Cos’è la farmacocinetica?","Cosa fa il corpo al farmaco: assorbimento, distribuzione, metabolismo, eliminazione."],
["Come si somministrano i β-lattamici per sfruttare la loro PK/PD?","Con infusioni prolungate o dosi frazionate, per restare a lungo sopra la MIC."],
["Come si somministrano gli antibiotici concentrazione-dipendenti?","Dose unica alta, perché conta il picco (aminoglicosidi, chinoloni)."]
],
gap:[
["I droplet di Flügge cadono entro ___ metri.","1-2",["1-2","2"]],
["Morbillo, varicella e TB si trasmettono con i droplet ___.","nuclei",["nuclei"]],
["L’Ebola si trasmette per ___, non per via aerea.","contatto",["contatto"]],
["Un’infezione che arriva dall’esterno si dice ___.","esogena",["esogena"]],
["Nell’epatite B il danno epatico è soprattutto ___.","immunomediato",["immunomediato","indiretto"]],
["Per i β-lattamici conta il tempo sopra la ___.","MIC",["MIC"]],
["I chinoloni sono antibiotici ___-dipendenti.","concentrazione",["concentrazione"]]
],
match:[["Droplet nuclei","Morbillo"],["Parenterale inapparente","Rasoi e spazzolini"],["Danno citopatico","Diretto"],["Farmacodinamica","Effetto sul germe"],["Germi MDR","Ospedale"]],
mcq:[
["Quale NON è un limite dei postulati di Koch?",["Valgono per tutti i batteri coltivabili","Esistono virus non coltivabili","Esistono portatori asintomatici","Esistono malattie multifattoriali"],0,"I postulati funzionano bene proprio per i batteri coltivabili."],
["A che distanza cadono i droplet di Flügge?",["Entro 1-2 metri","Oltre 10 metri","Restano sospesi per ore","Mai"],0,"Sono superiori a 5 µm."],
["Quale è una zoonosi?",["Brucellosi","Morbillo","Sifilide","Influenza stagionale"],0,"Anche leishmaniosi e rickettsiosi."],
["L’uso di un rasoio in comune è un esempio di trasmissione:",["Parenterale inapparente","Fecale-orale","Aerea","Verticale"],0,"Microlesioni che fanno passare sangue."],
["Cosa studia la farmacocinetica?",["Cosa fa il corpo al farmaco","Cosa fa il farmaco al germe","Le resistenze","La MIC"],0,"Assorbimento, distribuzione, metabolismo, eliminazione."],
["Per un aminoglicoside lo schema migliore è:",["Dose unica giornaliera alta","Infusione continua a basse dosi","Dosi piccole ogni 2 ore","Somministrazione topica"],0,"È concentrazione-dipendente: conta il picco."]
]};

AX["mi:2"]={
fc:[
["Cos’è l’endocardite infettiva?","Infezione dell’endocardio, soprattutto valvolare, su valvola nativa o protesica."],
["Ordine di frequenza delle valvole colpite?","Mitrale > aortica > tricuspide (PWID) > polmonare (“Mai Aprire Troppi Pacchi”)."],
["Perché il cuore sinistro è più colpito?","Per il maggior stress emodinamico e la turbolenza."],
["Endocardite acuta, subacuta e cronica: germi tipici?","Acuta: S. aureus. Subacuta: S. viridans. Cronica: Brucella."],
["Quali germi dominano nell’endocardite?","Gram positivi: streptococchi, enterococchi, stafilococchi."],
["Eziologia dell’endocardite tardiva su protesi?","Oltre 1 anno: simile a quella della valvola nativa."],
["Germi rari di endocardite?","HACEK (Gram negativi) e miceti (Candida, Aspergillus nell’immunodepresso)."],
["Prima tappa della patogenesi?","Danno endoteliale con esposizione del fattore tissutale e formazione di NBTE (piastrine e fibrina)."],
["Seconda e terza tappa della patogenesi?","Batteriemia con adesione dei germi alla NBTE, poi crescita della vegetazione."],
["Su quale versante cresce la vegetazione?","Su quello a bassa pressione (atriale per la mitrale), per effetto Venturi."],
["Perché la vegetazione dà emboli?","Non è vascolarizzata ed è friabile."],
["Perché nelle infezioni su protesi e dispositivi serve la rimozione?","Per il biofilm, che protegge i germi dagli antibiotici."],
["Quando un soffio è criterio clinico di endocardite?","Se è di nuova insorgenza; la modifica di un soffio preesistente non basta."],
["Fenomeni vascolari dell’endocardite?","Emboli, infarti splenici, lesioni di Janeway, emorragie congiuntivali."],
["Fenomeni immunologici dell’endocardite?","Noduli di Osler, macchie di Roth, glomerulonefrite, fattore reumatoide positivo."],
["Quale alterazione proteica si vede all’elettroforesi?","Ipergammaglobulinemia policlonale (picco a base larga)."],
["Complicanze dell’endocardite?","Distruzione valvolare con scompenso, embolie settiche, ascessi metastatici."],
["Come si prelevano le emocolture?","3 set da 10 ml, da entrambe le braccia, per aerobi, anaerobi e miceti."],
["Criteri maggiori di Duke?","Emocolture positive per germi tipici (2 separate) o Coxiella IgG >1:800; evidenza ecocardiografica."],
["Quando l’endocardite è probabile secondo Duke?","1 maggiore + 1-2 minori, oppure 3-4 minori."],
["Ecocardio transtoracico o transesofageo?","Prima il transtoracico; il transesofageo è più sensibile (protesi, ascessi)."],
["Quando si ripetono le emocolture in terapia?","Dopo 48-72 ore, per verificare la risposta."],
["Indicazioni alla chirurgia nell’endocardite?","Scompenso, infezione non controllata (ascesso, germi resistenti, funghi), alto rischio embolico."],
["A chi si fa la profilassi antibiotica?","Solo ai pazienti ad alto rischio prima di procedure odontoiatriche a rischio."]
],
gap:[
["La valvola più colpita dall’endocardite è la ___.","mitrale",["mitrale"]],
["Nei tossicodipendenti per via endovenosa è più colpita la ___.","tricuspide",["tricuspide"]],
["La vegetazione mitralica cresce sul versante ___.","atriale",["atriale"]],
["I germi HACEK sono Gram ___.","negativi",["negativi","negativo"]],
["Le lesioni di Janeway sono ___ e si trovano su palmo e pianta.","indolori",["indolori"]],
["La terapia antibiotica dell’endocardite dura ___-6 settimane.","4",["4","quattro"]],
["Un pacemaker infetto va sempre ___.","rimosso",["rimosso"]]
],
match:[["Endocardite acuta","S. aureus"],["Endocardite subacuta","S. viridans"],["Endocardite cronica","Brucella"],["Effetto Venturi","Versante a bassa pressione"],["Biofilm","Rimozione del dispositivo"]],
mcq:[
["Un’endocardite tardiva su protesi (oltre 1 anno) ha eziologia:",["Simile a quella su valvola nativa","Sempre da stafilococchi coagulasi-negativi","Sempre fungina","Solo da HACEK"],0,"Le forme precoci sono invece da contaminazione intraoperatoria."],
["La prima tappa della patogenesi dell’endocardite è:",["Danno endoteliale con NBTE","Batteriemia","Embolia settica","Ascesso perivalvolare"],0,"Poi arrivano i batteri e cresce la vegetazione."],
["Quale reperto è un fenomeno vascolare dell’endocardite?",["Lesioni di Janeway","Noduli di Osler","Macchie di Roth","Glomerulonefrite"],0,"Le altre tre sono fenomeni immunologici."],
["Quale elettroforesi è tipica dell’endocardite?",["Ipergammaglobulinemia policlonale","Picco monoclonale stretto","Ipogammaglobulinemia","Normale sempre"],0,"Picco a base larga."],
["Quale NON è un’indicazione alla chirurgia nell’endocardite?",["Febbre che scende in 48 ore con antibiotico","Scompenso da insufficienza valvolare","Ascesso perivalvolare","Vegetazioni grandi ad alto rischio embolico"],0,"La risposta alla terapia non richiede chirurgia."]
]};

AX["mi:3"]={
fc:[
["Quali sono le cause principali di polmonite?","Virus e batteri."],
["Classificazione istopatologica delle polmoniti?","Alveolare (lobare o lobulare/broncopolmonite) e interstiziale."],
["Chi causa le polmoniti alveolari?","Solo batteri: pneumococco, Klebsiella, S. aureus."],
["Chi causa le polmoniti interstiziali?","Virus (70%), Mycoplasma, Chlamydia, Pneumocystis."],
["Classificazione epidemiologica delle polmoniti?","CAP (comunità), HAP (ospedale, dopo 48 ore), VAP (ventilatore), polmonite dell’immunocompromesso."],
["Come si estende la polmonite alveolare?","Attraverso i pori di Kohn e i canali di Lambert, fermandosi alla scissura."],
["Quali sono le 4 fasi della polmonite lobare?","Congestione, epatizzazione rossa, epatizzazione grigia, risoluzione."],
["Esordio della polmonite lobare?","Brusco: brivido squassante, febbre alta, dolore toracico puntorio, tosse con escreato rugginoso."],
["Obiettività della polmonite lobare?","Ottusità, aumento del fremito vocale tattile, soffio bronchiale, rantoli crepitanti."],
["Quale infezione virale può riattivarsi nella polmonite pneumococcica?","L’herpes labialis."],
["Cosa mostra la RX nella polmonite lobare?","Addensamento lobare omogeneo con broncogramma aereo."],
["Complicanze della polmonite lobare?","Versamento o empiema, ascesso, batteriemia, meningite."],
["Agenti della polmonite atipica?","Virus (influenza, parainfluenza, RSV, CMV), Mycoplasma, Chlamydia, Legionella, Coxiella."],
["Clinica della polmonite atipica?","Esordio graduale, tosse secca, febbre moderata, cefalea e mialgie."],
["Cos’è la dissociazione clinico-radiologica?","Obiettività povera ma RX con interstiziopatia o vetro smerigliato."],
["Manifestazioni extrapolmonari del Mycoplasma?","Crioagglutinine con anemia emolitica, eritema multiforme, miringite bollosa."],
["Terapia della polmonite atipica?","Macrolidi, doxiciclina o chinoloni."],
["Dove vive la Legionella e come si trasmette?","Acque contaminate, condizionatori, docce; per inalazione di aerosol, non tra persone."],
["Clinica della legionellosi?","Polmonite grave con iponatriemia, diarrea, confusione e aumento delle transaminasi."],
["Terapia della legionellosi?","Azitromicina o levofloxacina."],
["Quale sovrainfezione temere dopo l’influenza?","Quella da S. aureus."]
],
gap:[
["Una polmonite comparsa dopo 48 ore di ricovero si chiama ___.","HAP",["HAP"]],
["La polmonite associata al ventilatore si chiama ___.","VAP",["VAP"]],
["Nella lobare il fremito vocale tattile è ___.","aumentato",["aumentato"]],
["Alla RX la lobare mostra il ___ aereo.","broncogramma",["broncogramma"]],
["Il Mycoplasma può dare la miringite ___.","bollosa",["bollosa"]],
["La legionellosi si associa a ___natriemia.","ipo",["ipo"]],
["L’antigene urinario della Legionella rileva il sierogruppo ___.","1",["1","uno"]]
],
match:[["Epatizzazione grigia","Terza fase"],["Escreato rugginoso","Pneumococco"],["Miringite bollosa","Mycoplasma"],["Condizionatori","Legionella"],["Dopo influenza","S. aureus"]],
mcq:[
["Un brivido squassante con febbre alta e dolore puntorio fa pensare a:",["Polmonite lobare pneumococcica","Polmonite da Mycoplasma","Bronchite virale","TB"],0,"Esordio brusco tipico."],
["La polmonite atipica si caratterizza per:",["Esordio graduale e tosse secca","Escreato rugginoso","Ottusità marcata","Soffio bronchiale"],0,"Con dissociazione clinico-radiologica."],
["Quale antibiotico è adatto a una polmonite da Mycoplasma?",["Azitromicina","Amoxicillina","Ceftriaxone","Penicillina G"],0,"Il Mycoplasma non ha parete: i β-lattamici non agiscono."],
["Un focolaio di polmoniti in un albergo con impianto di condizionamento fa pensare a:",["Legionella","Pneumococco","Mycoplasma","Pneumocystis"],0,"Si trasmette con l’aerosol, non tra persone."],
["La Legionella si trasmette da persona a persona?",["No, solo per inalazione di aerosol","Sì, con le goccioline","Sì, per contatto","Sì, per via fecale-orale"],0,"Per questo non serve isolare il paziente."],
["Quale virus è importante nei bambini e nei trapiantati?",["RSV","HAV","HPV","EBV"],0,"Il virus respiratorio sinciziale."]
]};

AX["mi:4"]={
fc:[
["Perché il bacillo di Koch è alcol-acido resistente?","Per la parete ricca di cere (acidi micolici)."],
["Su quale terreno cresce il bacillo di Koch e in quanto tempo?","Löwenstein-Jensen, in settimane (crescita lentissima); è aerobio obbligato."],
["Altri micobatteri del complesso tubercolare?","M. bovis (latte non pastorizzato), M. africanum."],
["Quale ipersensibilità induce il bacillo di Koch?","Di tipo IV: è la base della Mantoux e del danno granulomatoso."],
["Chi trasmette la TB?","Pazienti con forma polmonare bacillifera (escreato positivo, cavitaria), con droplet nuclei."],
["Cosa aumenta la contagiosità della TB?","Paziente non in terapia, tosse, ambienti chiusi, contatti prolungati."],
["Fattori di rischio per la TB?","HIV (il più forte), malnutrizione, diabete, silicosi, anti-TNF, alcol, età estreme."],
["Cosa indica una TB in un bambino sotto i 5 anni?","Una trasmissione recente."],
["Rischio di riattivazione della TB latente?","Circa 5-10% nella vita, molto di più con HIV."],
["Cos’è la TB post-primaria?","Riattivazione endogena o reinfezione esogena, con caverne apicali."],
["Cos’è la TB miliare?","Disseminazione ematogena, con tubercoli coroideali al fondo oculare nel 30% circa."],
["Sedi della TB extrapolmonare?","Linfonodi (scrofola), pleura, meningi (meningite basale), vertebre (Pott), reni, surrene."],
["Come si esegue la Mantoux?","5 UI di PPD intradermiche, lettura dell’indurimento a 48-72 ore."],
["Cut-off di 10 mm della Mantoux: per chi?","Operatori sanitari, immigrati da aree endemiche, bambini sotto i 4 anni."],
["Falsi positivi e falsi negativi della Mantoux?","Positivi: BCG, micobatteri non tubercolari. Negativi: immunodepressione, anergia."],
["I test immunologici distinguono latente e attiva?","No: per questo serve la RX del torace."],
["Cosa mostra la RX nella TB?","Infiltrati apicali, caverne, adenopatie ilari, versamento."],
["Microscopia dell’escreato nella TB?","Ziehl-Neelsen su 3 campioni: rapida ma poco sensibile."],
["Cosa fa il test Xpert MTB/RIF?","Rileva il DNA del bacillo e la resistenza alla rifampicina in poche ore."],
["Cosa si vede all’istologia della TB?","Granuloma con necrosi caseosa."],
["Schema della terapia standard della TB?","2 mesi con 4 farmaci (PERI), poi 4 mesi con rifampicina e isoniazide: 6 mesi."],
["Cosa si fa nella recidiva di TB?","Si aggiunge streptomicina per 2 mesi (PERIS)."],
["Effetti avversi di isoniazide e rifampicina?","Isoniazide: neuropatia (dare B6) ed epatite. Rifampicina: urine arancioni, induzione enzimatica."],
["A cosa serve il vaccino BCG?","Protegge i bambini dalle forme gravi (miliare, meningite); poco efficace nell’adulto."]
],
gap:[
["Il bacillo di Koch è un aerobio ___.","obbligato",["obbligato"]],
["Il terreno di coltura del bacillo di Koch è il Löwenstein-___.","Jensen",["Jensen"]],
["Il fattore di rischio più forte per la TB è l’___.","HIV",["HIV"]],
["La TB post-primaria predilige gli ___ polmonari.","apici",["apici"]],
["La Mantoux si legge dopo 48-___ ore.","72",["72"]],
["Nella Mantoux si misura l’___, non l’eritema.","indurimento",["indurimento","infiltrato"]],
["La terapia standard della TB dura ___ mesi.","6",["6","sei"]],
["La TB MDR è resistente a isoniazide e ___.","rifampicina",["rifampicina"]]
],
match:[["M. bovis","Latte non pastorizzato"],["Scrofola","Linfonodi"],["Xpert MTB/RIF","Resistenza a rifampicina"],["Mantoux 15 mm","Nessun fattore di rischio"],["BCG","Forme gravi nel bambino"],["Ghon","Infezione primaria"],["Miliare","Tubercoli coroideali"],["Ziehl-Neelsen","BAAR"],["Pott","Vertebre"],["Necrosi caseosa","Granuloma"]],
mcq:[
["La parete del bacillo di Koch è ricca di:",["Acidi micolici","Peptidoglicano sottile","Lipopolisaccaride","Capsula polisaccaridica"],0,"Per questo è alcol-acido resistente."],
["Quale paziente con TB è più contagioso?",["Polmonare cavitaria con escreato positivo, non in terapia","Extrapolmonare linfonodale","In terapia da 3 mesi","Con TB latente"],0,"La TB latente non è contagiosa."],
["Quale farmaco aumenta il rischio di riattivare una TB latente?",["Anti-TNF","Paracetamolo","Statine","Antistaminici"],0,"Per questo si fa lo screening prima dei biologici."],
["Quale esame rileva in poche ore DNA e resistenza alla rifampicina?",["Xpert MTB/RIF","Coltura","Mantoux","Quantiferon"],0,"La coltura richiede settimane."],
["Quale farmaco richiede di associare la vitamina B6?",["Isoniazide","Rifampicina","Etambutolo","Pirazinamide"],0,"Previene la neuropatia periferica."],
["Perché la streptomicina si sospende dopo 2 mesi?",["Per l’ototossicità","Per le urine arancioni","Per la neurite ottica","Per l’iperuricemia"],0,"Si usa nello schema PERIS della recidiva."],
["Il vaccino BCG nell’adulto è:",["Poco efficace","Altamente protettivo","Obbligatorio","Terapeutico"],0,"Protegge soprattutto i bambini dalle forme gravi."]
]};

AX["mi:5"]={
fc:[
["Differenza tra IVU non complicata e complicata?","Non complicata: donna sana non gravida. Complicata: anomalie, catetere, uomo, gravidanza, diabete."],
["Differenza tra recidiva e reinfezione?","Recidiva: stesso ceppo. Reinfezione: ceppo diverso."],
["Cos’è l’UPEC?","L’E. coli uropatogeno, germe più comune in tutte le IVU (circa 90% delle forme basse)."],
["Altri germi delle IVU?","Klebsiella, Proteus (calcoli di struvita), enterococco, S. saprophyticus nelle giovani donne."],
["Germi da considerare nei giovani sessualmente attivi?","Chlamydia, Neisseria, Mycoplasma, Ureaplasma."],
["Cos’è la batteriuria asintomatica?","Urinocoltura positiva senza sintomi: di norma non si tratta."],
["Va trattata la batteriuria nel paziente cateterizzato?","No, se non ha sintomi: la colonizzazione è frequente."],
["Vie di infezione delle vie urinarie?","Ascendente (la più comune), ematogena (rara: S. aureus, Candida), linfatica."],
["Difese naturali delle vie urinarie?","Flusso e svuotamento completo, pH acido, proteina di Tamm-Horsfall, IgA, lattobacilli vaginali."],
["Fattori che predispongono alle IVU?","Uretra femminile corta, rapporti sessuali, gravidanza, menopausa, ostruzioni, catetere, reflusso, diabete."],
["Cosa indicano leucocito-esterasi e nitriti allo stick?","Leucocito-esterasi: piuria. Nitriti: enterobatteri che riducono i nitrati."],
["Quando serve l’urinocoltura?","Forme complicate, recidive, pielonefrite, gravidanza; non sempre nella cistite semplice della donna."],
["Sintomi della cistite?","Disuria, pollachiuria, stranguria, urgenza, dolore sovrapubico, a volte ematuria, senza febbre."],
["Terapie di prima scelta della cistite non complicata?","Fosfomicina 3 g dose singola, nitrofurantoina, cotrimossazolo per 3 giorni."],
["Profilassi delle cistiti ricorrenti?","Fosfomicina ogni 10 giorni per 4-6 mesi, oppure post-coitale."],
["Clinica della pielonefrite?","Febbre alta con brivido, dolore lombare, Giordano positivo, a volte sintomi di cistite."],
["Esami nella pielonefrite?","Urinocoltura, emocolture, ecografia."],
["Complicanze della pielonefrite?","Urosepsi, ascesso renale, necrosi papillare."],
["Terapia della pielonefrite?","Fluorochinolone o ceftriaxone per 7-14 giorni."],
["Clinica della prostatite acuta?","Febbre, disuria, dolore perineale, prostata dolente e calda all’esplorazione."],
["Terapia della prostatite?","Fluorochinoloni (buona penetrazione) per 2-4 settimane, più a lungo nella cronica."]
],
gap:[
["Le IVU nell’uomo sono considerate ___.","complicate",["complicate","complicata"]],
["Lo S. ___ causa IVU nelle giovani donne.","saprophyticus",["saprophyticus"]],
["L’urinocoltura è significativa da 10^___ UFC/ml.","5",["5","cinque"]],
["L’urinocoltura si fa sul mitto ___.","intermedio",["intermedio"]],
["Con l’enterococco i nitriti sono ___.","negativi",["negativi"]],
["La fosfomicina si dà alla dose di ___ g.","3",["3","tre"]],
["Nella prostatite acuta va evitato il ___ prostatico.","massaggio",["massaggio"]]
],
match:[["UPEC","Germe più comune"],["Tamm-Horsfall","Difesa urinaria"],["Leucocito-esterasi","Piuria"],["Ceftriaxone","Pielonefrite"],["Necrosi papillare","Complicanza renale"]],
mcq:[
["Un’IVU da un ceppo diverso dal precedente è una:",["Reinfezione","Recidiva","Colonizzazione","Batteriuria asintomatica"],0,"La recidiva è causata dallo stesso ceppo."],
["La via di infezione più comune delle vie urinarie è:",["Ascendente","Ematogena","Linfatica","Transplacentare"],0,"L’ematogena è rara (S. aureus, Candida)."],
["Quale fattore protegge dalle IVU?",["Flora vaginale a lattobacilli","Catetere","Reflusso vescico-ureterale","Menopausa"],0,"Anche flusso urinario e pH acido."],
["Quando l’urinocoltura non è sempre necessaria?",["Cistite non complicata della donna","Pielonefrite","Gravidanza","IVU ricorrenti"],0,"La diagnosi è clinica."],
["Una cistite tipica ha:",["Disuria e pollachiuria senza febbre","Febbre alta e brivido","Dolore perineale","Giordano positivo"],0,"La febbre fa pensare alla pielonefrite."],
["La pielonefrite si tratta per:",["7-14 giorni","1 giorno","6 mesi","3 ore"],0,"Con fluorochinolone o ceftriaxone."]
]};

AX["mi:6"]={
fc:[
["Incubazione di HAV e HEV?","HAV 15-45 giorni, HEV 14-60 giorni."],
["Incubazione di HBV e HCV?","HBV 30-180 giorni, HCV 15-160 giorni."],
["Quali epatiti si trasmettono per via fecale-orale?","A ed E (le vocali entrano dalla bocca)."],
["Transaminasi nell’epatite acuta?","Molto alte, con ALT più alte delle AST (inversione del De Ritis)."],
["Fasi cliniche dell’epatite acuta?","Prodromica (astenia, nausea), itterica (urine scure, feci chiare), convalescenza."],
["Che virus è l’HAV?","Un picornavirus a RNA, non citopatico: danno immunomediato, non cronicizza."],
["Fonti di contagio dell’HAV?","Frutti di mare crudi (mitili), frutti di bosco, acqua; il congelamento non lo inattiva."],
["Quando l’epatite A è più contagiosa?","A fine incubazione, prima dell’ittero."],
["Complicanza rara dell’epatite A?","L’epatite fulminante (atrofia gialla acuta), più negli epatopatici."],
["Prevenzione dell’epatite A?","Vaccino inattivato; immunoglobuline nei contatti."],
["Come si prende l’epatite E nei Paesi industrializzati?","Con carne di maiale o cinghiale poco cotta (nei Paesi poveri con l’acqua)."],
["In chi l’epatite E può cronicizzare?","Negli immunodepressi, come i trapiantati."],
["Che virus è l’HBV?","Un DNA virus (Hepadnavirus) con trascrittasi inversa."],
["Cronicizzazione dell’HBV in base all’età?","Circa 90% nei neonati, meno del 5-10% negli adulti."],
["Cosa indica l’IgG anti-HBc?","Contatto con il virus: non c’è dopo il solo vaccino."],
["Significato di HBeAg e anti-HBe?","HBeAg: alta replicazione e contagiosità. Anti-HBe: sieroconversione."],
["Complicanze dell’epatite B cronica?","Cirrosi ed epatocarcinoma, anche senza cirrosi."],
["Terapia dell’epatite B cronica?","Entecavir o tenofovir, oppure interferone peghilato."],
["Differenza tra coinfezione e superinfezione HDV?","Coinfezione B+D: di solito acuta, guarisce. Superinfezione su B cronico: grave, evolve rapidamente in cirrosi."],
["Il vaccino HBV protegge dall’HDV?","Sì, perché l’HDV ha bisogno dell’HBsAg."],
["Che virus è l’HCV e come si trasmette?","Flavivirus a RNA, parenterale (droghe ev, trasfusioni pre-1990, tatuaggi); sessuale e verticale rare."],
["Quanto cronicizza l’epatite C?","Nel 70-85% dei casi, spesso asintomatica per anni."],
["Evoluzione dell’epatite C?","Fibrosi, cirrosi (circa 20% in 20-30 anni), epatocarcinoma."],
["Diagnosi dell’epatite C?","Anti-HCV per lo screening, HCV-RNA per confermare l’infezione attiva, genotipo."]
],
gap:[
["L’epatite A non ___ mai.","cronicizza",["cronicizza"]],
["L’IgM anti-HAV indica un’infezione ___.","acuta",["acuta"]],
["L’epatite E è grave nel ___ trimestre di gravidanza.","terzo",["terzo","3°","3"]],
["Un HBsAg positivo da oltre ___ mesi indica epatite B cronica.","6",["6","sei"]],
["L’IgM anti-HBc indica epatite B ___.","acuta",["acuta"]],
["La superinfezione HDV evolve rapidamente verso la ___.","cirrosi",["cirrosi"]],
["I DAA guariscono l’epatite C in oltre il ___% dei casi.","95",["95"]],
["Per l’epatite C ___ un vaccino.","non esiste",["non esiste","manca"]]
],
match:[["IgG anti-HAV","Pregressa o vaccino"],["Anti-HBs","Immunità"],["HBeAg","Alta replicazione"],["Crioglobulinemia","HCV"],["Carne di cinghiale","HEV"],["Coinfezione B+D","Acuta, guarisce"],["Superinfezione D","Cirrosi rapida"],["Trasfusioni pre-1990","HCV"],["Entecavir","HBV"],["Atrofia gialla acuta","Epatite fulminante"]],
mcq:[
["Nell’epatite acuta il rapporto tra transaminasi è:",["ALT più alte delle AST","AST più alte delle ALT","Uguali","Entrambe normali"],0,"Inversione dell’indice di De Ritis."],
["Quando l’epatite A è più contagiosa?",["A fine incubazione, prima dell’ittero","Durante la convalescenza","Dopo 6 mesi","Mai"],0,"Per questo è difficile contenerla."],
["In quale paziente l’epatite E può cronicizzare?",["Trapiantato immunodepresso","Giovane sano","Donna in gravidanza","Bambino vaccinato"],0,"Negli immunocompetenti è autolimitante."],
["L’epatite B cronicizza più spesso:",["Nei neonati","Negli adulti sani","Negli anziani","Mai"],0,"Circa il 90% nei neonati infetti."],
["Un paziente con anti-HBs positivo e anti-HBc negativo è:",["Vaccinato","Guarito da infezione","Portatore cronico","In fase acuta"],0,"Senza anti-HBc non c’è stato contatto con il virus."],
["Quale farmaco si usa nell’epatite B cronica?",["Tenofovir","Sofosbuvir","Ribavirina da sola","Aciclovir"],0,"Anche entecavir o interferone peghilato."],
["Quale esame conferma un’infezione attiva da HCV?",["HCV-RNA","Anti-HCV","HBsAg","IgM anti-HAV"],0,"L’anti-HCV resta positivo anche dopo la guarigione."],
["L’epatite C si trasmette soprattutto per via:",["Parenterale","Fecale-orale","Aerea","Alimentare"],0,"Sessuale e verticale sono rare."]
]};

AX["mi:7"]={
fc:[
["Quando un’osteomielite è cronica?","Segni oltre 6 settimane, fallimento della terapia o recidiva, presenza di sequestro."],
["Classificazione di Waldvogel?","Ematogena, da focolaio contiguo, associata a insufficienza vascolare (piede diabetico)."],
["Classificazione anatomica di Cierny-Mader?","1 midollare, 2 superficiale, 3 localizzata, 4 diffusa con instabilità."],
["Classi funzionali di Cierny-Mader?","A sano, B con comorbidità, C quando il trattamento è più rischioso della malattia (terapia conservativa)."],
["Perché nel bambino l’osteomielite colpisce la metafisi?","Per i vasi a ansa con flusso lento."],
["Sede dell’osteomielite ematogena nell’adulto?","Soprattutto le vertebre (spondilodiscite), spesso dopo batteriemia o endocardite."],
["Germe principale dell’osteomielite?","S. aureus."],
["Germe della spondilite da zoonosi?","Brucella."],
["Clinica dell’osteomielite?","Dolore localizzato, febbre (non sempre), rigidità, deficit neurologici se c’è un ascesso epidurale."],
["Perché S. aureus cronicizza nell’osso?","Si internalizza negli osteoblasti e forma biofilm."],
["Esami di laboratorio nell’osteomielite?","VES, PCR, emocolture."],
["Ruolo di TC e scintigrafia?","TC per i sequestri; la scintigrafia è un esame aggiuntivo."],
["Cosa suggerisce il probe-to-bone positivo?","Osteomielite nel piede diabetico."],
["Terapia dell’osteomielite cronica?","Antibiotico mirato per almeno 6 settimane + debridement e rimozione del sequestro."],
["Infezioni protesiche precoci: tempi e germe?","Entro 3 mesi, contaminazione intraoperatoria, S. aureus."],
["Infezioni protesiche ritardate?","3-24 mesi: stafilococchi coagulasi-negativi, Cutibacterium."],
["Infezioni protesiche tardive?","Oltre 24 mesi, di origine ematogena."],
["Come si fa diagnosi di infezione protesica?","Fistola comunicante, artrocentesi (cellule e coltura), colture intraoperatorie multiple, sonicazione della protesi."],
["Chirurgia nelle infezioni protesiche croniche?","Sostituzione della protesi in 1 o 2 tempi."]
],
gap:[
["Lo stadio 1 di Cierny-Mader è la forma ___.","midollare",["midollare"]],
["Nella classe ___ di Cierny-Mader si preferisce la terapia conservativa.","C",["C"]],
["Nel bambino l’osteomielite ematogena colpisce la ___.","metafisi",["metafisi"]],
["Nei drepanocitici il germe tipico è la ___.","Salmonella",["Salmonella"]],
["L’esame più sensibile nelle fasi precoci è la ___.","RM",["RM","risonanza"]],
["La terapia antibiotica dura almeno ___ settimane.","6",["6","sei"]],
["Le infezioni protesiche tardive compaiono oltre ___ mesi.","24",["24"]]
],
match:[["Waldvogel","Meccanismo"],["Cierny-Mader 3","Localizzata"],["Piede diabetico","Insufficienza vascolare"],["Sonicazione","Protesi espiantata"],["Cutibacterium","Protesi ritardata"]],
mcq:[
["Un’osteomielite associata a insufficienza vascolare è tipica:",["Del piede diabetico","Del bambino","Della drepanocitosi","Della TB"],0,"È una delle tre categorie di Waldvogel."],
["Lo stadio 4 di Cierny-Mader indica:",["Osteomielite diffusa con instabilità","Forma midollare","Forma superficiale","Forma localizzata stabile"],0,"Mi Sento Leggermente Distrutto."],
["Quale germe causa spesso osteomielite nei tossicodipendenti per via endovenosa?",["Pseudomonas","Salmonella","Brucella","Listeria"],0,"Insieme a S. aureus."],
["L’osteomielite ematogena dell’adulto si presenta soprattutto come:",["Spondilodiscite","Osteomielite metafisaria","Osteomielite del cranio","Artrite settica del ginocchio"],0,"Spesso dopo batteriemia o endocardite."],
["Perché nelle PJI l’antibiotico da solo raramente guarisce?",["Per il biofilm sul materiale protesico","Perché i germi sono sempre virus","Perché l’osso non è vascolarizzato","Perché la protesi è sterile"],0,"Serve la chirurgia."],
["Un’infezione protesica a 2 mesi dall’intervento si tratta di solito con:",["DAIR","Sostituzione in 2 tempi","Solo antibiotico per os","Amputazione"],0,"Debridement e ritenzione della protesi."],
["Quale esame NON fa parte della diagnosi di infezione protesica?",["Patch test","Artrocentesi con coltura","Colture intraoperatorie multiple","Sonicazione della protesi"],0,"Conta anche una fistola comunicante con la protesi."]
]};

AX["mi:8"]={
fc:[
["Quali agenti causano il 90% delle meningiti?","Batteri e virus."],
["Germi della meningite neonatale?","Streptococco di gruppo B, E. coli, Listeria."],
["Germi della meningite nel lattante?","Storicamente Haemophilus tipo b (ridotto dal vaccino), meningococco, pneumococco."],
["Germe della meningite in bambini e giovani adulti?","Il meningococco."],
["Chi è a rischio di meningite da Listeria?","Neonati, over 50, immunodepressi, gravide."],
["Liquor della meningite batterica?","Torbido, neutrofili oltre 1000/µl, proteine alte, glucosio basso (rapporto sotto 0,4)."],
["Cause di meningite a liquor limpido?","Virus (75%), TB, Listeria, Cryptococcus, Leptospira, Borrelia, Brucella, Treponema."],
["Virus più frequenti di meningite?","Enterovirus, HSV, VZV, virus della parotite."],
["Liquor della meningite virale?","Linfociti, proteine poco aumentate, glucosio normale."],
["Liquor della meningite tubercolare o fungina?","Linfociti, proteine molto alte, glucosio basso; meningite basale."],
["In quali meningiti la pressione di apertura è alta?","Batteriche e da criptococco."],
["Triade classica della meningite?","Febbre, cefalea, rigidità nucale (completa in meno della metà dei casi)."],
["Segni meningei da cercare?","Kernig, Brudzinski, Lasègue."],
["Segni della meningite nel neonato?","Irritabilità, rifiuto del pasto, fontanella bombata."],
["Quando fare la TC prima della rachicentesi?","Immunodepressione, malattia del SNC, convulsioni recenti, papilledema, coscienza alterata, deficit focali."],
["Sequenza se serve la TC?","Emocolture, desametasone e antibiotici, TC, poi rachicentesi."],
["Esami sul liquor?","Chimico-fisico, Gram, coltura, antigeni, PCR multiplex."],
["Perché il desametasone nella meningite?","Riduce sordità e mortalità da pneumococco; va dato prima o con la prima dose di antibiotico."],
["Durata della terapia per germe?","Meningococco 7 giorni, pneumococco 10-14, Listeria almeno 21."],
["Terapia della meningite da Cryptococcus?","Amfotericina B + flucitosina, poi fluconazolo."],
["Come si diagnostica il Cryptococcus nel liquor?","Inchiostro di china e antigene criptococcico."],
["Complicanze acute della meningite?","Edema cerebrale, ipertensione endocranica, idrocefalo, ascesso, trombosi dei seni, SIADH, shock."],
["Sequele della meningite?","Sordità (soprattutto pneumococco), deficit cognitivi, epilessia, paralisi dei nervi cranici."]
],
gap:[
["Nel neonato il germe più frequente è lo streptococco di gruppo ___.","B",["B"]],
["Nella meningite batterica il rapporto glucosio liquor/sangue è sotto ___.","0,4",["0,4","0.4"]],
["La meningite tubercolare è una meningite ___.","basale",["basale"]],
["Il desametasone si dà alla dose di 0,15 mg/kg ogni ___ ore.","6",["6","sei"]],
["La meningite da Listeria si tratta per almeno ___ giorni.","21",["21"]],
["La sequela più tipica della meningite da pneumococco è la ___.","sordità",["sordità"]],
["La meningite meningococcica si tratta per ___ giorni.","7",["7","sette"]]
],
match:[["Kernig","Segno meningeo"],["Inchiostro di china","Cryptococcus"],["Fontanella bombata","Neonato"],["Desametasone","Riduce la sordità"],["Ciprofloxacina","Profilassi contatti"]],
mcq:[
["Nell’adulto il germe più frequente di meningite batterica è:",["Pneumococco","Listeria","Strepto B","E. coli"],0,"Nei giovani prevale il meningococco."],
["Perché nell’over 50 si aggiunge l’ampicillina?",["Per coprire Listeria","Per coprire il meningococco","Per coprire HSV","Per coprire Cryptococcus"],0,"Le cefalosporine non coprono Listeria."],
["La triade classica della meningite è completa:",["In meno della metà dei casi","Sempre","Solo nei neonati","Mai"],0,"Spesso manca un elemento."],
["Paziente con sospetta meningite e papilledema: cosa si fa prima?",["Emocolture, desametasone e antibiotici, poi TC","Rachicentesi subito","Si aspetta la TC prima dell’antibiotico","Solo osservazione"],0,"La terapia non deve aspettare."],
["Quale esame sul liquor identifica rapidamente molti agenti insieme?",["PCR multiplex","Coltura","Esame chimico-fisico","Glicemia"],0,"Oltre a Gram, antigeni e coltura."],
["Quale complicanza endocrina può dare la meningite?",["SIADH","Diabete di tipo 1","Ipertiroidismo","Morbo di Addison sempre"],0,"Con iponatriemia."],
["Nella meningite da Cryptococcus nell’HIV si usa come terapia di attacco:",["Amfotericina B + flucitosina","Ceftriaxone","Aciclovir","Ampicillina"],0,"Poi si passa al fluconazolo."]
]};

AX["mi:9"]={
fc:[
["Caratteristiche della diarrea secretoria?","Dal tenue: acquosa, abbondante, senza leucociti né sangue, da tossine (colera, ETEC, S. aureus)."],
["Caratteristiche della diarrea infiammatoria?","Dal colon: piccole quantità, muco e sangue, febbre, tenesmo, da germi invasivi."],
["Germi della diarrea infiammatoria?","Shigella, Entamoeba, Campylobacter, EHEC, Salmonella."],
["Cos’è la diarrea penetrante o sistemica?","Il germe attraversa la mucosa e diffonde: S. Typhi, Yersinia."],
["Perché l’intossicazione alimentare ha incubazione brevissima?","La tossina è già preformata nell’alimento."],
["Fattori dell’ospite nelle diarree infettive?","Acidità gastrica (ridotta dagli IPP), motilità, flora intestinale (alterata dagli antibiotici), immunità."],
["Perché la Shigella si trasmette così facilmente?","Bastano 10-100 batteri per infettare."],
["Clinica del rotavirus?","Diarrea grave nei bambini sotto i 5 anni, d’inverno, con vomito e diarrea acquosa."],
["Diagnosi e prevenzione del rotavirus?","Antigene fecale; vaccino orale."],
["Come si presenta il colera?","Feci ad acqua di riso senza febbre, con disidratazione grave e rapida."],
["Terapia del colera?","Prima di tutto la reidratazione (ORS o ev); la doxiciclina 300 mg dose singola accorcia il decorso."],
["Cos’è l’ETEC?","L’E. coli della diarrea del viaggiatore, secretoria con tossine termolabile e termostabile."],
["Clinica dell’EHEC O157:H7?","Diarrea emorragica senza febbre, con rischio di SEU nei bambini."],
["Clinica della shigellosi?","Dissenteria bacillare con febbre, tenesmo, crampi."],
["Complicanze della shigellosi?","SEU (S. dysenteriae), artrite reattiva, convulsioni nei bambini."],
["Terapia della shigellosi?","Fluorochinoloni, azitromicina o ceftriaxone."],
["Fonti delle salmonelle minori?","Uova, pollame, maionese, gelati."],
["Clinica delle salmonelle minori?","Incubazione 6-72 ore, febbre, crampi, diarrea, vomito; autolimitante."],
["Chi va trattato con antibiotico nelle salmonelle minori?","Neonati, anziani, immunodepressi, portatori di protesi vascolari."],
["Fattori di rischio per C. difficile?","Antibiotici (clindamicina, cefalosporine, chinoloni), ricovero, età avanzata, IPP."],
["Tossine di C. difficile?","A (enterotossina) e B (citotossina); il ceppo 027 è ipervirulento."],
["Clinica di C. difficile?","Diarrea, colite pseudomembranosa, megacolon tossico, perforazione."],
["Diagnosi di C. difficile?","GDH + tossine o PCR su feci diarroiche."],
["Terapia delle recidive di C. difficile?","Trapianto di microbiota fecale; il metronidazolo non è più di prima scelta."],
["Clinica dell’intossicazione da stafilococco?","Vomito incoercibile e crampi senza febbre, 2-3 ore dopo il pasto, guarigione in 24 ore."]
],
gap:[
["La diarrea secretoria nasce dal ___.","tenue",["tenue","intestino tenue"]],
["La diarrea infiammatoria dà muco, sangue e ___.","tenesmo",["tenesmo"]],
["Per infettare bastano 10-100 batteri di ___.","Shigella",["Shigella"]],
["La tossina colerica aumenta l’___ intracellulare.","AMPc",["AMPc","AMP ciclico"]],
["La diarrea del viaggiatore è causata soprattutto da ___.","ETEC",["ETEC"]],
["Nell’EHEC vanno evitati gli ___.","antibiotici",["antibiotici"]],
["Le salmonelle minori hanno incubazione di 6-___ ore.","72",["72"]],
["La vancomicina per C. difficile si dà per via ___.","orale",["orale"]]
],
match:[["Rotavirus","Bambini sotto 5 anni"],["ETEC","Diarrea del viaggiatore"],["Tossina preformata","Incubazione brevissima"],["Clindamicina","C. difficile"],["Cannoli al caldo","S. aureus"]],
mcq:[
["Quale germe causa diarrea penetrante con diffusione sistemica?",["Salmonella Typhi","Vibrio cholerae","ETEC","S. aureus"],0,"Anche Yersinia."],
["Nel colera la cosa più importante è:",["Reidratare","Dare antibiotici ev subito","Dare antidiarroici","Digiuno"],0,"La doxiciclina accorcia il decorso, ma la reidratazione salva la vita."],
["Una diarrea emorragica senza febbre in un bambino, con rischio di SEU, fa pensare a:",["EHEC O157:H7","ETEC","Rotavirus","Colera"],0,"Gli antibiotici aumentano il rilascio di tossina."],
["Quale complicanza tardiva può dare la Shigella?",["Artrite reattiva","Cirrosi","Endocardite","Meningite"],0,"Anche SEU e convulsioni nei bambini."],
["Perché nelle salmonelle minori non si trattano i soggetti sani?",["Gli antibiotici prolungano lo stato di portatore","Il germe è sempre resistente","Gli antibiotici sono tossici","Non esistono antibiotici attivi"],0,"La malattia è autolimitante."],
["Come si lavano le mani dopo un paziente con C. difficile?",["Con acqua e sapone","Solo con gel alcolico","Non serve","Con acqua calda senza sapone"],0,"Le spore resistono all’alcol."]
]};

AX["mi:10"]={
fc:[
["Agente della febbre tifoide?","Salmonella enterica sierotipo Typhi (e Paratyphi)."],
["Come si trasmette la febbre tifoide?","Per via fecale-orale; è endemica dove l’igiene è scarsa."],
["Dove si annida il portatore cronico di tifo?","Nella colecisti."],
["Incubazione della febbre tifoide?","In media circa 14 giorni (fino a 60)."],
["Patogenesi della febbre tifoide?","Attraversa le placche di Peyer, si moltiplica nei macrofagi, batteriemia primaria, colonizza fegato, milza, midollo e colecisti, batteriemia secondaria."],
["Fattori predisponenti alla tifoide?","Ipocloridria, IPP, anemia falciforme, immunodepressione."],
["Sintomi del 1° settenario?","Febbre a scalini fino a 40 °C, cefalea, bradicardia relativa, lingua a dardo, stipsi."],
["Cos’è la lingua a dardo?","Lingua patinosa con i bordi rossi, tipica della tifoide."],
["Sintomi del 2° settenario?","Febbre a plateau, stato tifoso, roseole, splenomegalia, diarrea a purea di piselli."],
["Complicanze del 3° settenario?","Emorragia e perforazione intestinale, miocardite, epatite, CID."],
["Cosa succede nel 4° settenario?","Defervescenza per lisi e convalescenza; possibili recidive."],
["Quando l’emocoltura è più spesso positiva?","Nel 1° settenario."],
["Quando diventano positive coprocoltura e urinocoltura?","Dalla 2ª-3ª settimana."],
["Limiti della sierodiagnosi di Widal?","Positiva dalla 2ª settimana e poco specifica (agglutinine anti-O e anti-H)."],
["Alterazioni di laboratorio nella tifoide?","Leucopenia con neutropenia, transaminasi aumentate."],
["Terapia di prima linea della tifoide?","Fluorochinoloni (ciprofloxacina, levofloxacina) o ceftriaxone 2 g/die ev."],
["Terapia dei ceppi resistenti?","Azitromicina se resistenti ai chinoloni, meropenem per gli XDR."],
["Quando possono comparire ricadute?","2-3 settimane dopo lo sfebbramento."],
["Terapia del portatore cronico?","Ciprofloxacina per 4 settimane; colecistectomia se c’è litiasi."],
["Follow-up dopo la tifoide?","Tre coprocolture negative a 4 settimane dalla fine della terapia."],
["Vaccini contro la tifoide?","Orale vivo attenuato (Ty21a) e polisaccaridico Vi parenterale."]
],
gap:[
["L’unico serbatoio di S. Typhi è l’___.","uomo",["uomo"]],
["Il batterio attraversa la mucosa a livello delle placche di ___.","Peyer",["Peyer"]],
["La bradicardia relativa è detta dissociazione ___-termica.","sfigmo",["sfigmo"]],
["Nel 2° settenario la diarrea è ‘a purea di ___’.","piselli",["piselli"]],
["La mielocoltura resta positiva anche dopo l’inizio dell’___.","antibiotico",["antibiotico","antibiotico terapia"]],
["Il portatore cronico elimina il germe con le feci per oltre ___ anno.","1",["1","un"]],
["Il vaccino orale vivo attenuato contro il tifo si chiama ___.","Ty21a",["Ty21a"]]
],
match:[["Lingua a dardo","1° settenario"],["Stato tifoso","2° settenario"],["Defervescenza per lisi","4° settenario"],["Widal","Agglutinine"],["Ceftriaxone","Prima linea"]],
mcq:[
["Dove si moltiplica S. Typhi dopo aver attraversato la mucosa?",["Nei macrofagi","Nei globuli rossi","Nei neuroni","Nelle cellule muscolari"],0,"Poi colonizza fegato, milza, midollo e colecisti."],
["Quale condizione predispone alla febbre tifoide?",["Uso di IPP","Ipercloridria","Dieta vegetariana","Ipertensione"],0,"L’acidità gastrica è una difesa."],
["Lo stato tifoso è:",["Obnubilamento del 2° settenario","Una perforazione","Una forma di portatore","Un’eruzione cutanea"],0,"Insieme a roseole e splenomegalia."],
["Quale esame è positivo soprattutto nella prima settimana?",["Emocoltura","Coprocoltura","Widal","Urinocoltura"],0,"Coprocoltura e urinocoltura diventano positive più tardi."],
["Quale reperto ematologico è tipico della tifoide?",["Leucopenia con neutropenia","Leucocitosi neutrofila marcata","Eosinofilia","Policitemia"],0,"Con transaminasi aumentate."],
["Un ceppo di S. Typhi XDR si tratta con:",["Meropenem","Amoxicillina","Cotrimossazolo","Vancomicina"],0,"Azitromicina per i resistenti ai chinoloni."],
["Come si conferma la guarigione dopo la terapia?",["Tre coprocolture negative a 4 settimane","Una sola emocoltura negativa","Widal negativa","Nessun controllo"],0,"Per escludere lo stato di portatore."]
]};

AX["mi:11"]={
fc:[
["Che virus è l’HIV?","Un retrovirus (lentivirus) a RNA; HIV-1 pandemico, HIV-2 in Africa occidentale e meno aggressivo."],
["Come entra l’HIV nella cellula?","gp120 si lega al CD4 e ai corecettori CCR5 o CXCR4; gp41 media la fusione."],
["Perché l’HIV muta così tanto?","La trascrittasi inversa non ha proof-reading: quasispecie e resistenze."],
["Cosa fa l’integrasi?","Inserisce il DNA provirale nel genoma: crea un serbatoio latente non eradicabile."],
["Cosa fa la proteasi dell’HIV?","Matura le proteine virali."],
["Quali cellule infetta l’HIV?","Linfociti T CD4+, macrofagi, cellule dendritiche, microglia (SNC come santuario)."],
["Infezione primaria da HIV?","Dopo 2-4 settimane: sindrome simil-mononucleosica, picco di viremia, alta contagiosità."],
["Cosa succede nella latenza clinica?","Dura anni, con calo progressivo dei CD4."],
["Fase finale dell’HIV senza terapia?","CD4 sotto 200: infezioni opportunistiche, morte in circa 2 anni."],
["Categorie cliniche CDC A, B e C?","A: asintomatico, acuta, linfoadenopatia. B: sintomatico non AIDS (candidosi orale, leucoplachia villosa, zoster). C: AIDS-definenti."],
["Categorie immunologiche CDC?","1: CD4 ≥500. 2: 200-499. 3: sotto 200."],
["Clinica e terapia della polmonite da Pneumocystis?","Dispnea, tosse secca, LDH alta, ipossia da sforzo; cotrimossazolo ev 21 giorni ± steroidi."],
["Toxoplasmosi cerebrale nell’AIDS?","CD4 sotto 100, lesioni con enhancement ad anello; pirimetamina + sulfadiazina."],
["Altre patologie AIDS-definenti?","Candidosi esofagea, Kaposi, PML, criptococcosi, MAC, TB, linfomi, carcinoma cervicale invasivo."],
["Cos’è l’HAND?","L’insieme dei disturbi neurocognitivi associati a HIV."],
["Vie di trasmissione dell’HIV?","Sessuale (la più frequente), parenterale, verticale, professionale (puntura accidentale circa 0,3%)."],
["Cos’è la PrEP?","Profilassi pre-esposizione con tenofovir/emtricitabina."],
["Quanto dura la PEP?","28 giorni, iniziata entro 72 ore (meglio entro 2-4 ore)."],
["Come si previene la trasmissione verticale?","Terapia alla madre, profilassi al neonato, niente allattamento al seno: rischio sotto l’1%."],
["Cosa rileva il test di 4ª generazione?","Antigene p24 e anticorpi insieme: periodo finestra più corto."],
["Cos’è la stadiazione di Fiebig?","La sequenza di comparsa dei marcatori: RNA, poi p24, poi anticorpi."],
["A cosa servono carica virale e CD4?","Carica virale: prognosi e risposta alla terapia. CD4: rischio di opportunisti."],
["Classi di farmaci antiretrovirali?","NRTI, NNRTI, inibitori dell’integrasi, inibitori della proteasi, inibitori dell’ingresso."],
["Obiettivo della terapia antiretrovirale?","HIV-RNA non rilevabile (sotto 50 copie/ml) e recupero dei CD4."],
["Cos’è l’IRIS?","La sindrome da immunoricostituzione dopo l’inizio della terapia."]
],
gap:[
["L’HIV-2 è diffuso soprattutto in Africa ___.","occidentale",["occidentale"]],
["La gp___ media la fusione dell’HIV con la cellula.","41",["41"]],
["L’infezione opportunistica più frequente nell’AIDS è la polmonite da ___.","Pneumocystis",["Pneumocystis"]],
["La toxoplasmosi cerebrale compare con CD4 sotto ___.","100",["100"]],
["Il rischio dopo puntura accidentale è circa lo ___%.","0,3",["0,3","0.3"]],
["La PEP va iniziata entro ___ ore.","72",["72"]],
["Prima dell’abacavir si cerca l’HLA-B*___.","5701",["5701"]],
["La terapia antiretrovirale è indicata a ___ i pazienti.","tutti",["tutti"]]
],
match:[["gp120","Legame al CD4"],["Integrasi","Serbatoio latente"],["Leucoplachia villosa","Categoria B"],["Fiebig","Stadi dell’infezione acuta"],["IRIS","Dopo l’avvio della terapia"]],
mcq:[
["Quale proteina dell’HIV si lega al CD4?",["gp120","gp41","p24","Integrasi"],0,"Poi interviene il corecettore CCR5 o CXCR4."],
["Perché l’HIV non si può eradicare con la terapia?",["Esiste un serbatoio latente di DNA integrato","Il virus è sempre resistente","I farmaci non entrano nel sangue","Il virus si nasconde nei globuli rossi"],0,"L’integrasi lo inserisce nel genoma."],
["L’infezione primaria acuta da HIV assomiglia a:",["Una mononucleosi","Una polmonite lobare","Una meningite batterica","Un’epatite fulminante"],0,"Con picco di viremia e alta contagiosità."],
["Un paziente HIV con candidosi orale e CD4 a 350 rientra nella categoria CDC:",["B2","A1","C3","A3"],0,"Candidosi orale = B; CD4 200-499 = 2."],
["Quale virus causa la leucoencefalopatia multifocale progressiva?",["Virus JC","HHV-8","CMV","EBV"],0,"È una patologia AIDS-definente."],
["Cosa riduce il periodo finestra nella diagnosi di HIV?",["Test di 4ª generazione con antigene p24","Western blot da solo","Conta dei CD4","Test di resistenza"],0,"Combina antigene e anticorpi."],
["Il regime antiretrovirale più usato oggi è:",["2 NRTI + 1 inibitore dell’integrasi","Monoterapia con NRTI","Solo inibitori della proteasi","Solo NNRTI"],0,"Esempi: dolutegravir, bictegravir."]
]};

AX["mi:12"]={
fc:[
["A quale famiglia appartiene Leishmania?","Trypanosomatidae, come i tripanosomi della malattia del sonno e di Chagas."],
["Com’è il flebotomo?","Moscerino di 2-3 mm, puntura dolorosa, attivo al crepuscolo e di notte in estate."],
["Specie e vettore della leishmaniosi mediterranea?","L. infantum, trasmessa da Phlebotomus perniciosus."],
["Vie di trasmissione rare della leishmaniosi?","Trasfusioni, siringhe condivise, trapianto, verticale."],
["Cosa succede quando il flebotomo punge?","Inocula il promastigote nel derma, che viene fagocitato dai macrofagi."],
["Cosa diventa il parassita nei macrofagi?","Amastigote, senza flagello, che si moltiplica."],
["Cosa succede nel vettore?","Gli amastigoti tornano promastigoti e migrano alla proboscide."],
["Cosa decide l’esito della leishmaniosi?","La risposta immunitaria: Th1 controlla, Th2 porta alla malattia."],
["Leishmaniosi e HIV?","Più replicazione, forme viscerali e atipiche, recidive: serve profilassi secondaria cronica."],
["Com’è la leishmaniosi cutanea?","Nodulo nel sito di puntura che ulcera, persiste mesi e guarisce con cicatrice (bottone d’Oriente)."],
["Cos’è la leishmaniosi mucocutanea?","Forma da L. braziliensis (America Latina) che distrugge naso e palato."],
["Quale sistema colpisce la leishmaniosi viscerale?","Il sistema reticolo-endoteliale."],
["Sintomi della leishmaniosi viscerale?","Febbre irregolare prolungata, astenia, calo di peso, splenomegalia massiva, epatomegalia, linfoadenopatie."],
["Perché nella viscerale c’è pancitopenia?","Per ipersplenismo e infiltrazione del midollo."],
["Alterazione proteica della viscerale?","Ipergammaglobulinemia policlonale con ipoalbuminemia."],
["Perché si chiama kala-azar?","Significa “febbre nera”, per l’iperpigmentazione della cute."],
["Complicanze della viscerale?","Infezioni batteriche, emorragie; letale se non trattata."],
["Diagnosi diretta di leishmaniosi?","Amastigoti nell’aspirato midollare o splenico; PCR su sangue o midollo."],
["Diagnosi sierologica di leishmaniosi?","IFAT, ELISA, rK39; meno affidabile negli HIV positivi."],
["Schema dell’amfotericina B liposomiale?","3 mg/kg nei giorni 1-5, poi 14 e 21 (dose totale 18-21 mg/kg)."],
["Alternative all’amfotericina?","Miltefosina (orale, teratogena), paromomicina; antimoniali abbandonati per cardiotossicità."]
],
gap:[
["Il flebotomo è detto anche ___.","pappatacio",["pappatacio"]],
["Il vettore mediterraneo è il Phlebotomus ___.","perniciosus",["perniciosus"]],
["Nel macrofago il parassita è un ___.","amastigote",["amastigote"]],
["La leishmaniosi cutanea è detta bottone d’___.","Oriente",["Oriente"]],
["La forma mucocutanea è causata da L. ___.","braziliensis",["braziliensis"]],
["L’amfotericina liposomiale è efficace in circa il ___% dei casi.","97",["97"]],
["Gli antimoniali pentavalenti sono stati abbandonati per la ___.","cardiotossicità",["cardiotossicità"]]
],
match:[["Promastigote","Vettore"],["Th1","Controllo dell’infezione"],["Bottone d’Oriente","Cutanea"],["rK39","Sierologia"],["Miltefosina","Teratogena"]],
mcq:[
["Quando punge il flebotomo?",["Al crepuscolo e di notte, in estate","Solo di giorno in inverno","Tutto l’anno a mezzogiorno","Mai sull’uomo"],0,"La puntura è dolorosa."],
["Quale forma del parassita viene inoculata dal flebotomo?",["Promastigote","Amastigote","Trofozoite","Cisti"],0,"Nel macrofago diventa amastigote."],
["Quale risposta immunitaria porta alla malattia?",["Th2","Th1","Th17 sempre","Nessuna"],0,"La Th1 la tiene sotto controllo."],
["Qual è la forma più comune di leishmaniosi?",["Cutanea","Viscerale","Mucocutanea","Oculare"],0,"La viscerale è la più grave."],
["Febbre prolungata, milza enorme e pancitopenia in un paziente con cane in casa: sospetti:",["Leishmaniosi viscerale","Febbre tifoide","Brucellosi","Endocardite"],0,"Con ipergammaglobulinemia."],
["Quale esame mostra direttamente gli amastigoti?",["Aspirato midollare","Emocromo","Esame urine","RX torace"],0,"Anche aspirato splenico o PCR."],
["Quale farmaco orale si usa come alternativa ma è teratogeno?",["Miltefosina","Amfotericina B","Paromomicina","Antimoniali"],0,"Va evitato in gravidanza."]
]};

AX["mi:13"]={
fc:[
["Chi trasmette la malaria?","La femmina di Anopheles (es. A. gambiae), vettore obbligato."],
["Cosa fanno gli sporozoiti?","Raggiungono il fegato: schizogonia epatica asintomatica, che libera merozoiti."],
["Cosa succede nei globuli rossi?","Schizogonia eritrocitaria; alcuni parassiti diventano gametociti."],
["Dove avviene il ciclo sessuato della malaria?","Nella zanzara, che ingerisce i gametociti."],
["Perché la febbre malarica è periodica?","Per il ciclo eritrocitario sincronizzato."],
["Caratteristiche di P. falciparum?","Terzana maligna, incubazione 6-15 giorni, invade globuli rossi di ogni età, parassitemia anche 5-20%."],
["Morfologia di P. falciparum nello striscio?","Anelli con castone multipli e gametociti a banana."],
["Perché il falciparum dà malaria cerebrale?","Per il sequestro nei capillari viscerali (citoaderenza con PfEMP1, rosette)."],
["Caratteristiche di P. vivax e P. ovale?","Terzana benigna (ogni 48 ore), preferiscono i reticolociti, formano ipnozoiti."],
["Caratteristiche di P. malariae?","Quartana (ogni 72 ore), globuli rossi vecchi, sindrome nefrosica."],
["Caratteristiche di P. knowlesi?","Sud-est asiatico, ciclo di 24 ore, può essere grave."],
["Come si svolge l’accesso malarico?","Brivido, febbre alta, sudorazione profusa."],
["Segni associati alla malaria?","Anemia, splenomegalia, piastrinopenia, ittero."],
["Regola della febbre al rientro da un viaggio?","Ogni febbre al rientro da zona endemica è malaria fino a prova contraria."],
["Criteri di malaria grave?","Coma (GCS <11), prostrazione, convulsioni, acidosi, ipoglicemia, anemia grave, insufficienza renale, ittero, edema polmonare, sanguinamenti, shock, iperparassitemia."],
["Differenza tra goccia spessa e striscio sottile?","La goccia spessa è più sensibile; lo striscio identifica specie e parassitemia."],
["Test rapidi per la malaria?","Antigeni HRP2 (falciparum) e LDH."],
["Se il primo esame è negativo ma il sospetto resta?","Ripetere ogni 12-24 ore per 3 volte."],
["Terapia di prima linea della malaria?","Derivati dell’artemisinina (es. diidroartemisinina + piperachina); clorochina solo per specie sensibili non falciparum."],
["Terapie di seconda linea?","Atovaquone + proguanil; chinino + doxiciclina."],
["Terapia della malaria grave?","Artesunato endovenoso."],
["A cosa serve la primachina?","Elimina gli ipnozoiti di vivax e ovale."],
["Profilassi della malaria?","Zanzariere, repellenti; chemioprofilassi con atovaquone-proguanil, doxiciclina o meflochina."]
],
gap:[
["La malaria è trasmessa dalla femmina di ___.","Anopheles",["Anopheles","anofele"]],
["La fase nel fegato si chiama schizogonia ___.","epatica",["epatica"]],
["Nella zanzara si sviluppano i ___ ingeriti col sangue.","gametociti",["gametociti"]],
["P. vivax e P. ovale preferiscono i ___.","reticolociti",["reticolociti"]],
["P. malariae può dare sindrome ___.","nefrosica",["nefrosica"]],
["Il ciclo di P. knowlesi dura ___ ore.","24",["24"]],
["La malaria grave si tratta con ___ endovenoso.","artesunato",["artesunato"]]
],
match:[["Sporozoiti","Fegato"],["Gametociti a banana","Falciparum"],["Goccia spessa","Sensibilità"],["Striscio sottile","Specie e parassitemia"],["Artesunato ev","Malaria grave"]],
mcq:[
["Quale fase del ciclo della malaria è asintomatica?",["Schizogonia epatica","Schizogonia eritrocitaria","Rottura dei globuli rossi","Accesso febbrile"],0,"I sintomi iniziano con la fase eritrocitaria."],
["Quale specie invade globuli rossi di ogni età con parassitemie molto alte?",["P. falciparum","P. vivax","P. ovale","P. malariae"],0,"Vivax e ovale preferiscono i reticolociti."],
["Un viaggiatore rientrato dall’Africa con febbre: primo esame?",["Goccia spessa e striscio","RX torace","Urinocoltura","TC encefalo"],0,"Malaria fino a prova contraria."],
["Quale test rapido rileva P. falciparum?",["Antigene HRP2","Galattomannano","Paul-Bunnell","Widal"],0,"L’LDH è comune a più specie."]
]};

AX["mi:14"]={
fc:[
["Caratteristiche comuni degli herpesvirus?","Virus a DNA con envelope, restano latenti per tutta la vita e possono riattivarsi."],
["Dove resta latente il CMV?","Nei monociti e nei progenitori midollari."],
["Cosa mostra il test di Tzanck negli herpesvirus?","Inclusioni intranucleari e cellule giganti multinucleate."],
["Manifestazioni dell’HSV-1?","Gengivostomatite nel bambino, herpes labiale ricorrente, cheratite, encefalite, patereccio erpetico."],
["Manifestazioni dell’HSV-2?","Herpes genitale con vescicole dolorose ed erosioni; trasmissione al neonato durante il parto."],
["Clinica dell’encefalite erpetica?","Febbre, alterazioni del comportamento, convulsioni."],
["Diagnosi e terapia dell’encefalite erpetica?","PCR su liquor; aciclovir endovenoso subito."],
["Quando si fa la terapia soppressiva per l’herpes?","Con più di 6 episodi all’anno."],
["Trasmissione e incubazione della varicella?","Aerea, con incubazione di circa 2-3 settimane (10-23 giorni)."],
["Quando è contagiosa la varicella?","Da 1-2 giorni prima del rash fino a quando tutte le lesioni sono croste."],
["Complicanze della varicella nell’adulto?","Polmonite varicellosa, encefalite, atassia cerebellare; in gravidanza varicella congenita."],
["Cos’è il segno di Hutchinson nello zoster?","Vescicole sulla punta del naso: indicano zoster oftalmico."],
["Come si trasmette l’EBV?","Con la saliva (“malattia del bacio”), in adolescenti e giovani adulti."],
["Triade della mononucleosi?","Febbre, faringotonsillite essudativa, linfoadenopatia cervicale posteriore."],
["Altri segni della mononucleosi?","Splenomegalia, epatite, linfocitosi con linfociti atipici."],
["Cosa succede se si dà amoxicillina nella mononucleosi?","Compare un rash."],
["Sierologia dell’EBV?","Paul-Bunnell (eterofili), anti-VCA IgM (acuta), anti-EBNA (pregressa)."],
["Complicanze della mononucleosi?","Rottura della milza (evitare sport), ostruzione delle vie aeree."],
["Tumori associati all’EBV?","Linfoma di Burkitt, Hodgkin, carcinoma nasofaringeo."],
["Come si trasmette il CMV?","Saliva, urine, sesso, trasfusioni, trapianti, via verticale."],
["CMV nell’immunocompetente?","Sindrome mononucleosica con Paul-Bunnell negativo."],
["Cosa causa il CMV congenito?","È la prima causa infettiva di sordità neurosensoriale e ritardo mentale; calcificazioni periventricolari."],
["CMV nell’immunodepresso?","Retinite, colite, polmonite, epatite; cellule “a occhio di civetta”."],
["Diagnosi del CMV?","PCR CMV-DNA, antigenemia pp65; in gravidanza sierologia con avidità delle IgG."],
["Clinica della sesta malattia (HHV-6)?","Febbre alta per 3 giorni, poi rash quando la febbre cade."]
],
gap:[
["HSV e VZV restano latenti nei gangli ___.","sensitivi",["sensitivi"]],
["L’encefalite erpetica colpisce il lobo ___.","temporale",["temporale"]],
["Lo zoster non supera la linea ___.","mediana",["mediana"]],
["I linfociti atipici della mononucleosi sono le cellule di ___.","Downey",["Downey"]],
["La sierologia dell’EBV pregresso mostra anticorpi anti-___.","EBNA",["EBNA"]],
["La sesta malattia è detta anche roseola ___.","infantum",["infantum"]],
["In alternativa al ganciclovir per il CMV si usa il ___.","foscarnet",["foscarnet"]]
],
match:[["Patereccio erpetico","HSV-1"],["Atassia cerebellare","Varicella"],["Anti-VCA IgM","EBV acuta"],["Calcificazioni periventricolari","CMV congenito"],["Antigenemia pp65","CMV"]],
mcq:[
["Dove resta latente l’EBV?",["Nei linfociti B","Nei gangli sensitivi","Nei neuroni motori","Negli epatociti"],0,"HSV e VZV nei gangli, CMV nei monociti."],
["Un paziente con febbre, comportamento strano e convulsioni: quale terapia iniziare subito?",["Aciclovir endovenoso","Amoxicillina","Fluconazolo","Solo antipiretici"],0,"Nel sospetto di encefalite erpetica non si aspetta la PCR."],
["L’HSV-2 si trasmette soprattutto:",["Per via sessuale","Con la saliva dei bambini","Per via aerea","Con gli alimenti"],0,"E al neonato durante il parto."],
["La varicella è contagiosa:",["Da 1-2 giorni prima del rash fino alle croste","Solo dopo le croste","Solo durante la febbre","Mai dopo il rash"],0,"Per questo si diffonde facilmente."],
["Quale complicanza della varicella è più tipica dell’adulto?",["Polmonite varicellosa","Sesta malattia","Mononucleosi","Rash da amoxicillina"],0,"La varicella è più grave negli adulti."],
["Un ragazzo con mononucleosi vuole tornare a giocare a calcio: cosa consigli?",["Evitare sport per il rischio di rottura splenica","Nessuna limitazione","Solo antibiotici","Steroidi a tutti"],0,"La milza è ingrandita e fragile."],
["Quale tumore è associato all’EBV?",["Carcinoma nasofaringeo","Carcinoma del colon","Melanoma","Seminoma"],0,"Anche Burkitt e Hodgkin."],
["Un bambino con febbre alta per 3 giorni e rash quando sfebbra ha:",["Sesta malattia (HHV-6)","Varicella","Morbillo","Scarlattina"],0,"È l’esantema critico."]
]};

AX["mi:15"]={
fc:[
["Dove si trovano Candida e Aspergillus?","Candida è un commensale intestinale; Aspergillus e Zigomiceti sono nell’aria."],
["Fattori di rischio per le micosi invasive?","Neutropenia, trapianto, chemio, steroidi, terapia intensiva, CVC, nutrizione parenterale, chirurgia addominale, antibiotici ad ampio spettro."],
["Quando sospettare una micosi invasiva?","Febbre che persiste o ricompare nonostante un antibiotico adeguato, con indici alti ma procalcitonina bassa."],
["A cosa serve il β-D-glucano?","È un marcatore pan-fungino (non rileva i Mucorales)."],
["Marcatore della candidosi invasiva?","Mannano/antimannano."],
["A cosa serve il Candida Score?","A stimare il rischio di candidosi in terapia intensiva."],
["Come si contrae l’aspergillosi?","Inalando i conidi di Aspergillus fumigatus."],
["Cos’è l’aspergilloma?","Una palla fungina in una cavità preesistente (TB, sarcoidosi), con emottisi nella metà dei casi; terapia chirurgica."],
["Cos’è l’aspergillosi broncopolmonare allergica?","Forma di asmatici e fibrosi cistica, con eosinofilia e IgE alte."],
["Cosa mostra la TC nell’aspergillosi invasiva?","Segno dell’alone e della falce d’aria, per angioinvasione."],
["Diagnosi dell’aspergillosi invasiva?","Galattomannano su siero e BAL, TC, coltura o istologia."],
["Terapia dell’aspergillosi invasiva?","Voriconazolo (prima scelta) o isavuconazolo; amfotericina B liposomiale."],
["Chi rischia la candidemia?","Pazienti in terapia intensiva, con CVC, chirurgia addominale, nutrizione parenterale, antibiotici prolungati."],
["Esami in ogni candidemia?","Fondo dell’occhio (endoftalmite) ed ecocardiogramma; rimozione del CVC."],
["Durata della terapia della candidemia?","14 giorni dalla prima emocoltura negativa, con step-down a fluconazolo se sensibile."],
["Agente e vettore della malattia di Lyme?","Borrelia burgdorferi, trasmessa dalla zecca Ixodes."],
["Quando aumenta il rischio di Lyme dopo il morso?","Se la zecca resta attaccata più di 36-48 ore."],
["Com’è l’eritema migrante?","Lesione a bersaglio che si allarga con centro chiaro, nelle pieghe; compare dopo 7-14 giorni nell’80% circa."],
["Lyme precoce disseminata?","Eritemi multipli, paralisi del faciale anche bilaterale, meningite, radicolite, cardite con blocco AV."],
["Lyme tardiva?","Artrite del ginocchio, acrodermatite cronica atrofica, neuroborreliosi cronica."],
["Diagnosi della malattia di Lyme?","Clinica con eritema migrante; sierologia in due tempi (ELISA + Western blot)."],
["Terapia della malattia di Lyme?","Doxiciclina (amoxicillina nei bambini e in gravidanza); ceftriaxone nelle forme neurologiche gravi o nella cardite."]
],
gap:[
["Il galattomannano è il marcatore di ___.","Aspergillus",["Aspergillus","aspergillosi"]],
["Il β-D-glucano non rileva i ___.","Mucorales",["Mucorales","zigomiceti"]],
["L’aspergilloma si forma in una ___ preesistente.","cavità",["cavità"]],
["Nell’aspergillosi invasiva la TC mostra il segno dell’___.","alone",["alone"]],
["In ogni candidemia va rimosso il ___.","CVC",["CVC","catetere"]],
["La Lyme si diagnostica con ELISA e ___ blot.","Western",["Western"]],
["La cardite di Lyme può dare un ___ atrioventricolare.","blocco",["blocco"]]
],
match:[["β-D-glucano","Pan-fungino"],["Aspergilloma","Chirurgia"],["Fondo dell’occhio","Candidemia"],["Paralisi del faciale","Lyme disseminata"],["Acrodermatite cronica atrofica","Lyme tardiva"]],
mcq:[
["Quale fattore NON aumenta il rischio di micosi invasiva?",["Giovane età in buona salute","Neutropenia prolungata","Catetere venoso centrale","Steroidi ad alte dosi"],0,"Contano neutropenia, trapianti, CVC, steroidi, antibiotici ad ampio spettro."],
["In una micosi invasiva la procalcitonina è di solito:",["Bassa, sotto 2 ng/ml","Molto alta","Sempre negativa la PCR","Uguale alle batteriche"],0,"Con PCR alta: aiuta a distinguere dalle sepsi batteriche."],
["Una palla fungina in una vecchia caverna tubercolare è:",["Aspergilloma","Aspergillosi invasiva","Candidemia","Mucormicosi"],0,"Spesso dà emottisi e si tratta con la chirurgia."],
["Un neutropenico con febbre persistente e noduli con alone alla TC: farmaco di scelta?",["Voriconazolo","Fluconazolo","Caspofungina","Doxiciclina"],0,"È un’aspergillosi invasiva."],
["Quale esame NON va fatto di routine in una candidemia?",["Mammografia","Fondo dell’occhio","Ecocardiogramma","Emocolture di controllo"],0,"Si cercano endoftalmite ed endocardite."],
["Dove compare tipicamente l’eritema migrante?",["Nelle pieghe (ascelle, inguine, cavo popliteo)","Sul palmo","Sul cuoio capelluto","Sulla mucosa orale"],0,"Si allarga con il centro chiaro."]
]};

AX["mi:16"]={
fc:[
["Che batteri sono le rickettsie?","Coccobacilli Gram negativi intracellulari obbligati."],
["Rickettsie del gruppo del tifo e vettori?","R. prowazekii (tifo epidemico, pidocchio), R. typhi (tifo murino, pulce del ratto)."],
["Rickettsie delle febbri maculose?","R. conorii (febbre bottonosa del Mediterraneo), R. rickettsii (Montagne Rocciose, più letale)."],
["Germi correlati alle rickettsie?","Coxiella burnetii (febbre Q), Orientia tsutsugamushi."],
["Quando e dove si prende la febbre bottonosa?","In estate, in zone rurali, con il contatto con i cani."],
["Quanto tempo serve alle zecche per trasmettere?","Ixodes circa 12 ore, Rhipicephalus più di 24 ore."],
["Come danneggiano i vasi le rickettsie?","Infettano l’endotelio: endotelite proliferativa, trombosi, aumento della permeabilità."],
["Conseguenze della vasculite da rickettsie?","Esantema, edemi, emorragie, danni d’organo."],
["Incubazione della febbre bottonosa?","5-7 giorni."],
["Esordio della febbre bottonosa?","Brusco: febbre alta, cefalea, mialgie, artralgie."],
["Cosa accompagna la tache noire?","Una linfoadenite satellite."],
["Quando compare l’esantema della febbre bottonosa?","Dal 3°-5° giorno, maculo-papulare, esteso a palmi e piante."],
["Esami di laboratorio nella febbre bottonosa?","Piastrinopenia, transaminasi alte, iponatriemia, PCR alta."],
["Chi rischia le forme gravi?","Anziani, diabetici, alcolisti, deficit di G6PD (mortalità fino al 10%)."],
["Complicanze delle forme gravi?","Coinvolgimento renale e neurologico, CID."],
["Come si conferma la diagnosi?","Sierologia (immunofluorescenza, sieroconversione) e PCR sulla biopsia dell’escara."],
["Diagnosi differenziale dell’esantema palmo-plantare?","Sifilide secondaria (VDRL, TPHA) e malattia mani-piedi-bocca."],
["Alternative alla doxiciclina?","Macrolidi: claritromicina, azitromicina."],
["Quando iniziare la terapia?","Su base clinica, senza aspettare la sierologia."],
["Come si rimuove una zecca?","Pinzette sottili, presa vicino alla cute, trazione lenta e costante senza ruotare."],
["Cosa non fare con una zecca e dopo la rimozione?","Niente olio, alcol o calore; disinfettare e osservare per 30-40 giorni."]
],
gap:[
["Le rickettsie sono batteri ___ obbligati.","intracellulari",["intracellulari"]],
["Il tifo epidemico è trasmesso dal ___.","pidocchio",["pidocchio"]],
["La zecca del cane si chiama Rhipicephalus ___.","sanguineus",["sanguineus"]],
["La tache noire è una ___ nera nel punto del morso.","escara",["escara"]],
["L’esantema compare dal 3°-___ giorno.","5",["5","quinto"]],
["Le forme gravi hanno mortalità fino al ___%.","10",["10"]],
["Dopo la rimozione della zecca si osserva per 30-___ giorni.","40",["40"]]
],
match:[["Rhipicephalus","Zecca del cane"],["Endotelite","Vasculite"],["VDRL","Sifilide secondaria"],["Doxiciclina","100 mg x2"],["Orientia tsutsugamushi","Correlata alle rickettsie"]],
mcq:[
["Il danno principale delle rickettsie è:",["Una vasculite dell’endotelio dei piccoli vasi","Una colite","Un’epatite fulminante","Una meningite purulenta"],0,"Da qui esantema, edemi ed emorragie."],
["Quale esame di laboratorio è tipico della febbre bottonosa?",["Piastrinopenia","Eosinofilia marcata","Policitemia","Ipercalcemia"],0,"Con transaminasi alte e iponatriemia."],
["Quale paziente rischia una febbre bottonosa grave?",["Anziano diabetico","Bambino sano","Giovane sportivo","Donna di 30 anni sana"],0,"Anche alcolisti e deficit di G6PD."],
["Come si conferma la diagnosi su campione cutaneo?",["PCR sulla biopsia dell’escara","Patch test","Lampada di Wood","Coltura su Sabouraud"],0,"Oppure con la sieroconversione."],
["Quale alternativa alla doxiciclina si usa nella febbre bottonosa?",["Claritromicina","Fluconazolo","Aciclovir","Metronidazolo"],0,"Anche azitromicina."],
["Qual è il modo corretto di rimuovere una zecca?",["Con pinzette sottili vicino alla cute, tirando lentamente","Con olio o alcol","Bruciandola","Ruotandola velocemente"],0,"Poi si disinfetta e si osserva per 30-40 giorni."]
]};

AX["mi:17"]={
fc:[
["Chi colpisce soprattutto la giardiasi?","I bambini tra 5 e 10 anni."],
["Forme di Giardia?","Cisti (infettanti e resistenti) e trofozoiti, che si attaccano al duodeno senza invaderlo."],
["Come si trasmette la Giardia?","Per via fecale-orale: acqua, asili, viaggiatori; basta una carica bassa."],
["Incubazione e decorso della giardiasi?","1-3 settimane; asintomatica fino all’80% dei casi."],
["Sintomi della giardiasi?","Diarrea acquosa maleodorante, steatorrea, meteorismo, malassorbimento, calo di peso."],
["Quale intolleranza segue spesso la giardiasi?","L’intolleranza secondaria al lattosio."],
["Diagnosi della giardiasi?","Esame parassitologico delle feci su campioni ripetuti, antigene fecale, PCR, string test."],
["Terapia della giardiasi?","Tinidazolo 2 g dose singola, metronidazolo o nitazoxanide."],
["Come si contrae l’amebiasi?","Ingerendo cisti di Entamoeba histolytica con acqua o cibi contaminati."],
["Clinica dell’amebiasi intestinale?","Colite con diarrea muco-sanguinolenta, ulcere a fiasco, possibile ameboma."],
["Ascesso epatico amebico?","Nel lobo destro, contenuto a pasta d’acciuga, febbre e dolore in ipocondrio destro."],
["Diagnosi dell’ascesso epatico amebico?","Sierologia ed ecografia."],
["Terapia dell’amebiasi?","Metronidazolo (tessutale), poi paromomicina (luminale) per eliminare le cisti."],
["Come si infetta l’uomo con Toxoplasma?","Oocisti (verdure, terra, lettiera), cisti nella carne cruda (maiale, ovino), via transplacentare, trapianti."],
["Tachizoiti e bradizoiti?","Tachizoiti: fase acuta. Bradizoiti: in cisti tissutali di muscolo e SNC, latenza per tutta la vita."],
["Toxoplasmosi nell’immunocompetente?","Spesso asintomatica o con linfoadenopatia cervicale."],
["Quando si ha toxoplasmosi congenita?","Solo se l’infezione primaria avviene in gravidanza."],
["Trasmissione e gravità in base all’epoca di gravidanza?","Il rischio di trasmissione cresce con l’età gestazionale; la gravità è maggiore nel 1° trimestre."],
["Cosa indica un’alta avidità delle IgG anti-toxoplasma?","Infezione avvenuta più di 4 mesi prima."],
["Terapia se il feto è infetto?","Pirimetamina + sulfadiazina + acido folinico."],
["Toxoplasmosi cerebrale nell’HIV?","CD4 sotto 100: lesioni multiple ad anello, febbre, cefalea, deficit focali."],
["Profilassi della toxoplasmosi nell’HIV?","Cotrimossazolo se CD4 sotto 100 e IgG positive."]
],
gap:[
["Il nome alternativo di Giardia intestinalis è Giardia ___.","lamblia",["lamblia"]],
["La giardiasi si tratta con tinidazolo ___ g in dose singola.","2",["2","due"]],
["L’ascesso epatico amebico colpisce di solito il lobo ___.","destro",["destro"]],
["Dopo il metronidazolo si dà un amebicida ___.","luminale",["luminale"]],
["L’ospite definitivo di Toxoplasma è il ___.","gatto",["gatto"]],
["Un’alta avidità delle IgG indica infezione da più di ___ mesi.","4",["4","quattro"]],
["Con la pirimetamina si associa sempre l’acido ___.","folinico",["folinico"]]
],
match:[["String test","Giardia"],["Ulcere a fiasco","Amebiasi"],["Paromomicina","Amebicida luminale"],["Bradizoiti","Cisti tissutali"],["Cotrimossazolo","Profilassi nell’HIV"]],
mcq:[
["Un bambino che frequenta l’asilo con diarrea maleodorante e steatorrea: sospetto?",["Giardiasi","Amebiasi","Colera","C. difficile"],0,"La carica infettante è bassa."],
["Diarrea muco-sanguinolenta con ulcere a fiasco fa pensare a:",["Amebiasi intestinale","Giardiasi","Rotavirus","Colera"],0,"Entamoeba histolytica."],
["Perché dopo il metronidazolo si dà la paromomicina nell’amebiasi?",["Per eliminare le cisti nel lume","Per curare il fegato","Per prevenire la SEU","Per ridurre la febbre"],0,"Il metronidazolo agisce sui tessuti."],
["Quale via NON trasmette la toxoplasmosi all’uomo?",["Puntura di zanzara","Carne cruda","Verdure sporche di terra","Via transplacentare"],0,"Anche la lettiera del gatto e i trapianti."],
["Quale farmaco si usa in gravidanza per ridurre la trasmissione di toxoplasma?",["Spiramicina","Pirimetamina da sola","Aciclovir","Fluconazolo"],0,"Se il feto è infetto si passa a pirimetamina + sulfadiazina."],
["Quale reperto fa parte della triade di Sabin?",["Corioretinite","Cataratta","Sordità","Cardiopatia"],0,"Con idrocefalo e calcificazioni intracraniche."]
]};

AX["mi:18"]={
fc:[
["Che germi sono le Brucelle?","Coccobacilli Gram negativi intracellulari facoltativi."],
["Specie di Brucella e animali?","B. melitensis (ovini e caprini), B. abortus (bovini), B. suis (suini), B. canis (cani)."],
["Cosa causa la Brucella negli animali?","Infezione cronica, mastite, aborto, sterilità."],
["Dove si registrano i casi in Italia?","Soprattutto al Sud e in Sicilia, con formaggi freschi artigianali e allevamenti."],
["Via di trasmissione più comune della brucellosi?","Orale: latte e derivati non pastorizzati (ricotta, formaggi freschi, burro, gelati)."],
["Chi rischia la brucellosi per contatto?","Pastori, mungitori, veterinari, macellai (liquidi biologici, materiale abortivo)."],
["Brucellosi da inalazione?","Nei laboratori (alto rischio professionale) e nelle stalle."],
["Vie rare di trasmissione della brucellosi?","Trasfusioni, trapianti, verticale (aborto, senza malformazioni)."],
["Come sopravvive la Brucella nell’ospite?","Dentro i macrofagi, nel sistema reticolo-endoteliale, formando granulomi."],
["Incubazione della brucellosi?","1-4 settimane, anche mesi."],
["Com’è la febbre della brucellosi?","Ondulante: settimane di febbre alternate a periodi senza febbre."],
["Com’è la sudorazione nella brucellosi?","Profusa e notturna, con odore di paglia bagnata."],
["Altri segni della brucellosi?","Astenia, artromialgie, epatosplenomegalia, linfoadenopatie."],
["Cos’è la brucellosi cronica?","Forma oltre 1 anno con astenia, depressione e localizzazioni focali."],
["Complicanze osteoarticolari della brucellosi?","Sacroileite, spondilite lombare (segno di Pedro Pons), artriti."],
["Altre complicanze della brucellosi?","Orchiepididimite, neurobrucellosi, endocardite (prima causa di morte), epatite granulomatosa."],
["Cosa sapere sulle emocolture per Brucella?","Serve incubazione prolungata (avvisare il laboratorio); la mielocoltura è più sensibile."],
["Altri test per la brucellosi?","Coombs anti-Brucella, ELISA, Rosa Bengala, PCR."],
["Esami di laboratorio nella brucellosi?","Leucopenia con linfocitosi relativa, anemia, transaminasi alte."],
["Terapia alternativa della brucellosi?","Doxiciclina 6 settimane + aminoglicoside (streptomicina o gentamicina) per 2-3 settimane."],
["Terapia di spondilite ed endocardite da Brucella?","Più lunga, 3 mesi o più, eventualmente con chirurgia."],
["Prevenzione della brucellosi?","Pastorizzazione e controllo veterinario delle greggi."]
],
gap:[
["La specie più frequente in Italia è B. ___.","melitensis",["melitensis"]],
["La brucellosi ___ si trasmette da uomo a uomo.","non",["non"]],
["Il sudore notturno ha odore di ___ bagnata.","paglia",["paglia"]],
["La brucellosi cronica dura più di ___ anno.","1",["1","un"]],
["La prima causa di morte nella brucellosi è l’___.","endocardite",["endocardite"]],
["La reazione di Wright non rileva B. ___.","canis",["canis"]],
["Nella brucellosi c’è leucopenia con ___ relativa.","linfocitosi",["linfocitosi"]]
],
match:[["B. suis","Suini"],["Paglia bagnata","Sudore notturno"],["Pedro Pons","Spondilite"],["Orchiepididimite","Complicanza genitale"],["Rosa Bengala","Test sierologico"]],
mcq:[
["La Brucella è un germe:",["Intracellulare facoltativo Gram negativo","Gram positivo sporigeno","Virus a RNA","Protozoo"],0,"Sopravvive nei macrofagi."],
["La via più comune di infezione da Brucella è:",["Latticini non pastorizzati","Contatto interumano","Puntura di zanzara","Acqua di mare"],0,"Ricotta e formaggi freschi artigianali."],
["Quale professione è a rischio di brucellosi per inalazione?",["Tecnico di laboratorio","Impiegato","Insegnante","Autista"],0,"Anche chi lavora nelle stalle."],
["La brucellosi in gravidanza può causare:",["Aborto senza malformazioni","Malformazioni cardiache","Sordità congenita","Idrocefalo"],0,"È una trasmissione verticale rara."],
["Febbre ondulante con sudori notturni dopo ricotta fresca del pastore: diagnosi probabile?",["Brucellosi","Febbre tifoide","Malaria","Leishmaniosi"],0,"Rientra tra le cause di FUO."]
]};

AX["mi:19"]={
fc:[
["Cos’è la batteriemia?","La presenza transitoria di batteri nel sangue."],
["Cos’è un focolaio sepsigeno?","Una sede di infezione che immette continuamente germi in circolo."],
["Come si definisce la disfunzione d’organo nella sepsi?","Un aumento del SOFA di almeno 2 punti."],
["Cos’era la SIRS?","Criteri basati su temperatura, FC, FR e leucociti: oggi superati, utili storicamente."],
["Germi principali della sepsi?","Gram negativi (E. coli, Klebsiella, Pseudomonas) e Gram positivi (S. aureus, streptococchi); Candida in intensiva."],
["Focolai più frequenti di sepsi?","Polmone (il più frequente), addome, vie urinarie, cute, cateteri."],
["Fattori di rischio per la sepsi?","Età estreme, immunodepressione, diabete, neoplasie, dispositivi invasivi, ricovero, alcolismo, splenectomia."],
["Cosa indica l’ipotermia in un anziano settico?","Gravità: la febbre può mancare."],
["Quali sistemi valuta il SOFA?","Respiratorio, coagulazione, fegato, cardiovascolare, SNC, rene."],
["Parametri del SOFA per ogni organo?","PaO2/FiO2, piastrine, bilirubina, PAM e vasopressori, GCS, creatinina o diuresi."],
["Cosa indicano i lattati?","Ipoperfusione e prognosi."],
["A cosa serve la procalcitonina nella sepsi?","Supporta l’origine batterica e aiuta a decidere quando sospendere l’antibiotico."],
["Quando prelevare le emocolture nella sepsi?","Prima dell’antibiotico, senza però ritardarlo."],
["Entro quando dare l’antibiotico?","Entro 1 ora nello shock, entro 3 ore nella sepsi probabile senza shock."],
["Quando dare 30 ml/kg di cristalloidi?","Se c’è ipotensione o lattati ≥4."],
["Quando si usa l’idrocortisone nella sepsi?","Nello shock settico refrattario."],
["Cos’è il controllo della fonte?","Drenaggio, rimozione del catetere o chirurgia del focolaio."],
["Cos’è la de-escalation?","Restringere l’antibiotico in base alle colture."]
],
gap:[
["La sepsi è un’infezione con ___ d’organo.","disfunzione",["disfunzione"]],
["Il focolaio di sepsi più frequente è il ___.","polmone",["polmone"]],
["Il qSOFA usa una frequenza respiratoria di almeno ___/min.","22",["22"]],
["Nel qSOFA la pressione sistolica è ≤___ mmHg.","100",["100"]],
["Nello shock l’antibiotico va dato entro ___ ora.","1",["1","una"]],
["Il volume iniziale di cristalloidi è di ___ ml/kg.","30",["30"]],
["Il vasopressore di prima scelta è la ___.","noradrenalina",["noradrenalina"]]
],
match:[["Batteriemia","Transitoria"],["PaO2/FiO2","SOFA respiratorio"],["GCS","SOFA neurologico"],["Procalcitonina","Origine batterica"],["Idrocortisone","Shock refrattario"]],
mcq:[
["Quale criterio fa parte della definizione di shock settico?",["Lattati sopra 2 mmol/l nonostante i liquidi","Febbre sopra 39 °C","Leucociti sopra 12.000","Frequenza cardiaca sopra 90"],0,"Con vasopressori per mantenere la PAM ≥65."],
["Il focolaio di sepsi più frequente è:",["Polmonare","Cutaneo","Osseo","Oculare"],0,"Seguono addome e vie urinarie."],
["Quale parametro NON fa parte del SOFA?",["Frequenza cardiaca","Piastrine","Bilirubina","Creatinina"],0,"La FC era un criterio della SIRS."],
["Paziente settico con PAM a 58 dopo 30 ml/kg di cristalloidi: cosa fai?",["Inizi la noradrenalina","Aspetti","Sospendi i liquidi e basta","Dai solo antipiretici"],0,"Prima riempire, poi stimolare."],
["Paziente settico con catetere venoso infetto: oltre all’antibiotico cosa serve?",["Rimuovere il catetere","Lasciarlo per i farmaci","Lavarlo con eparina","Niente"],0,"È il controllo della fonte."]
]};

AX["mi:20"]={
fc:[
["Categorie di FUO?","Classica, nosocomiale, neutropenica, associata a HIV."],
["Cause infettive di FUO?","TB, endocardite, ascessi, brucellosi, leishmaniosi, tifoide, CMV/EBV."],
["Cause non infettive di FUO?","Neoplasie (linfomi), malattie infiammatorie (Still, arterite a cellule giganti, LES), farmaci, febbre fittizia."],
["Cause di FUO nell’HIV?","Micobatteri (MAC, TB), CMV, criptococco, linfomi, reazioni a farmaci."],
["Pattern febbrili?","Continua, remittente, intermittente, ondulante (brucellosi), di Pel-Ebstein (Hodgkin)."],
["Cosa chiedere all’anamnesi nella FUO?","Viaggi, animali, alimenti, farmaci, sessualità, professione."],
["Esami di primo livello nella FUO?","Emocromo, indici di flogosi, emocolture multiple, urine, fegato e rene, sierologie, Mantoux/IGRA, RX torace, eco addome."],
["Esami di secondo livello nella FUO?","TC, PET-TC, ecocardiogramma, biopsie (midollo, linfonodo, arteria temporale)."],
["Perché evitare terapie empiriche nella FUO stabile?","Possono mascherare la diagnosi."],
["Quali sono le ABSSSI?","Cellulite/erisipela, infezione di ferita, ascesso cutaneo maggiore."],
["Germi principali delle ABSSSI?","S. aureus (anche MRSA) e Streptococcus pyogenes; Gram negativi in ferite chirurgiche e piede diabetico."],
["Come si valuta la risposta alla terapia nelle ABSSSI?","A 48-72 ore la lesione deve ridursi di almeno il 20%."],
["Cos’è la cellulite?","Infezione acuta diffusa di derma profondo e sottocute, con margini sfumati."],
["Cellulite purulenta e non purulenta: quali germi?","Non purulenta: streptococchi. Purulenta: pensare a S. aureus."],
["Cos’è l’erisipela?","Infezione del derma superficiale e dei linfatici da S. pyogenes, placca rossa lucida a margini netti."],
["Fattori di rischio di cellulite ed erisipela?","Linfedema, insufficienza venosa, intertrigine/tinea pedis, obesità, diabete, safenectomia."],
["Quando sospettare la fascite necrotizzante?","Dolore sproporzionato, crepitio, rapida progressione: emergenza chirurgica."],
["Terapia della cellulite non purulenta?","β-lattamico antistreptococcico: amoxicillina o cefazolina."],
["Terapia anti-MRSA nelle ABSSSI?","Vancomicina, linezolid, daptomicina, cotrimossazolo; dalbavancina e oritavancina long-acting."],
["Cellulite da Vibrio vulnificus?","Da acqua di mare, negli epatopatici, rapidamente necrotizzante."],
["Quando aggiungere l’antibiotico in un ascesso?","Se è esteso, con sintomi sistemici o immunodepressione."],
["Tipi di infezione del sito chirurgico?","Superficiale, profonda, di organo o spazio."],
["Prevenzione dell’infezione del sito chirurgico?","Profilassi antibiotica entro 60 minuti dall’incisione, tricotomia con clipper, controllo della glicemia."]
],
gap:[
["La FUO classica dura più di ___ settimane.","3",["3","tre"]],
["La febbre di Pel-Ebstein è tipica del linfoma di ___.","Hodgkin",["Hodgkin"]],
["Le ABSSSI coinvolgono un’area di almeno ___ cm².","75",["75"]],
["L’erisipela ha il segno dello ___.","scalino",["scalino"]],
["La fascite necrotizzante dà un dolore ___ ai segni visibili.","sproporzionato",["sproporzionato"]],
["La profilassi chirurgica va fatta entro ___ minuti dall’incisione.","60",["60","sessanta"]],
["Le infezioni del sito chirurgico senza protesi si considerano entro ___ giorni.","30",["30"]]
],
match:[["Cellulite","Margini sfumati"],["Fascite necrotizzante","Emergenza chirurgica"],["Dalbavancina","Long-acting"],["PET-TC","Secondo livello"],["Arteria temporale","Biopsia nella FUO"]],
mcq:[
["Quale causa di FUO è infiammatoria?",["Malattia di Still","Endocardite","Tubercolosi","Linfoma"],0,"Anche arterite a cellule giganti e LES."],
["Nella FUO dell’HIV quale causa è tipica?",["MAC disseminato","Brucellosi sempre","Gotta","Ipertiroidismo"],0,"Anche TB, CMV, criptococco e linfomi."],
["Quali germi causano più spesso le ABSSSI?",["S. aureus e S. pyogenes","E. coli e Klebsiella","Candida","Clostridium difficile"],0,"I Gram negativi nelle ferite chirurgiche e nel piede diabetico."],
["Dolore molto intenso, crepitio e rapida estensione in un’infezione dei tessuti molli: cosa sospetti?",["Fascite necrotizzante","Erisipela lieve","Ascesso semplice","Dermatite da contatto"],0,"È un’emergenza chirurgica."],
["Quale fattore NON aumenta il rischio di cellulite?",["Cute integra senza edemi","Linfedema","Tinea pedis","Diabete"],0,"Anche insufficienza venosa, obesità e safenectomia."]
]};
