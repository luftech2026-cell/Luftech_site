export const siteIdentity = {
  brandName: "Lufcore",
  siteLabel: "Lufcore",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.lufcore.it",
  heroEyebrow: "Lufcore",
  heroTitle: "Tecnologia, AI e sistemi digitali per operazioni",
  heroTitleAccent: "reali.",
  heroIntro:
    "Lufcore sviluppa e governa infrastrutture digitali, flussi operativi e progetti tecnologici proprietari. Oggi coordina l'evoluzione di Infissi360, integrando automazione, controllo dei processi e AI applicata in un ecosistema concreto.",
  responseWindow: "entro 1 giorno lavorativo",
  updatedAt: "22 giugno 2026",
};

export const contactChannels = [
  {
    label: "Telefono",
    value: "+39 379 3547052",
    href: "tel:+393793547052",
    icon: "fa-phone",
  },
  {
    label: "Info",
    value: "info@lufcore.it",
    href: "mailto:info@lufcore.it",
    icon: "fa-envelope",
  },
  {
    label: "Amministrazione",
    value: "amministrazione@lufcore.it",
    href: "mailto:amministrazione@lufcore.it",
    icon: "fa-building-o",
  },
  {
    label: "Assistenza",
    value: "assistenza@lufcore.it",
    href: "mailto:assistenza@lufcore.it",
    icon: "fa-life-ring",
  },
];

export const whatsappLink =
  "https://wa.me/393793547052?text=Buongiorno%2C%20vorrei%20contattare%20Lufcore%20per%20una%20comunicazione%20operativa.";

export const instagramProfile = {
  label: "Instagram",
  href: "https://www.instagram.com/lufcore.it/",
};

export const companyAddress =
  "Via Ca' Caprino 9A, 24039 Sotto il Monte Giovanni XXIII (BG), Italia";

export const companyDetails = [
  { label: "Titolare", value: "Luca Foglieni - ditta individuale" },
  { label: "P. IVA", value: "04908730163" },
  { label: "PEC", value: "infissi360@spidmail.it" },
  { label: "Email", value: "info@lufcore.it" },
  { label: "Sede", value: companyAddress },
];

export const companyStatusNote =
  "Lufcore e il nome commerciale di Luca Foglieni, ditta individuale con P. IVA 04908730163.";

export const responseCommitments = [
  "Canali ufficiali per comunicazioni operative, amministrative e tecniche.",
  "Valutazione ordinata di richieste, priorita, vincoli e contesto.",
  "Riscontro strutturato solo dopo raccolta delle informazioni necessarie.",
];

export const serviceProcess = [
  {
    title: "Lettura operativa",
    text: "Analisi dei processi reali, degli asset coinvolti, dei vincoli e delle aree in cui la tecnologia puo aumentare controllo e velocita.",
  },
  {
    title: "Architettura",
    text: "Definizione di flussi, interfacce, dati, automazioni e priorita tecniche prima di ogni evoluzione significativa.",
  },
  {
    title: "Implementazione",
    text: "Costruzione incrementale di moduli, integrazioni e sistemi applicati a casi concreti, con attenzione a affidabilita e manutenzione.",
  },
  {
    title: "Governo",
    text: "Monitoraggio, pulizia, documentazione essenziale e miglioramento continuo degli asset digitali gestiti.",
  },
];

export const services = [
  {
    slug: "siti-web",
    icon: "fa-sitemap",
    title: "Ecosistemi digitali",
    shortDescription:
      "Strutture web, interfacce e percorsi digitali progettati come parte di un sistema operativo piu ampio, non come semplici presenze online.",
    cardPoints: [
      "Architettura informativa coerente con obiettivi, dati e flussi reali.",
      "Esperienze digitali pensate per sostenere acquisizione, gestione e controllo.",
      "Base tecnica evolutiva per integrare automazioni, contenuti e strumenti futuri.",
    ],
    idealFor:
      "Asset digitali che devono comunicare, raccogliere segnali, alimentare processi e rimanere governabili nel tempo.",
    deliverables: [
      "Struttura dell'ecosistema e gerarchia delle sezioni",
      "Interfacce pubbliche e percorsi di accesso alle informazioni",
      "Collegamenti a canali operativi, dati e strumenti di gestione",
      "Impostazione tecnica pronta per evoluzioni successive",
    ],
    workflow: [
      "Mappatura dell'asset e dei suoi obiettivi operativi",
      "Definizione delle sezioni e dei punti di conversione informativa",
      "Sviluppo frontend e integrazione con il sistema complessivo",
      "Verifica tecnica, contenutistica e responsive",
    ],
    faqs: [
      {
        question: "Un ecosistema digitale e diverso da un sito tradizionale?",
        answer:
          "Si. Il sito tradizionale presenta informazioni; un ecosistema digitale collega contenuti, canali, dati e azioni operative in una struttura piu governabile.",
      },
      {
        question: "Si puo partire da una base essenziale?",
        answer:
          "Si. Una base essenziale puo essere corretta se e progettata con criteri di evoluzione, ordine tecnico e coerenza dei flussi.",
      },
      {
        question: "Perche questo approccio e rilevante per Lufcore?",
        answer:
          "Perche Lufcore lavora su asset digitali che devono crescere, essere mantenuti e integrarsi con processi reali come nel caso Infissi360.",
      },
    ],
  },
  {
    slug: "gestionali",
    icon: "fa-cogs",
    title: "Sistemi di gestione",
    shortDescription:
      "Dashboard, aree operative e strumenti interni per governare richieste, stati, dati, clienti, attivita e avanzamenti.",
    cardPoints: [
      "Controllo strutturato di dati, stati e responsabilita operative.",
      "Interfacce costruite per ridurre dispersione e lavoro manuale.",
      "Visione piu chiara di processi, priorita e avanzamenti.",
    ],
    idealFor:
      "Contesti in cui dati e attivita devono essere organizzati in modo leggibile, tracciabile e progressivamente automatizzabile.",
    deliverables: [
      "Dashboard operative e viste di controllo",
      "Stati, anagrafiche, note e cronologie",
      "Ruoli, permessi e livelli di visibilita",
      "Report essenziali e funzioni centrali del processo",
    ],
    workflow: [
      "Mappatura del processo e dei dati coinvolti",
      "Individuazione di passaggi critici e punti di controllo",
      "Disegno delle viste operative e dei ruoli",
      "Implementazione progressiva delle funzioni core",
    ],
    faqs: [
      {
        question: "Un sistema di gestione deve sostituire tutto subito?",
        answer:
          "No. Puo nascere come livello di controllo sopra processi esistenti e crescere solo dove produce ordine e vantaggio operativo.",
      },
      {
        question: "Qual e il valore principale?",
        answer:
          "Ridurre ambiguita, duplicazioni e perdita di informazioni, rendendo il processo leggibile e migliorabile.",
      },
      {
        question: "Come si collega a Infissi360?",
        answer:
          "Infissi360 richiede controllo su contatti, richieste, comunicazioni e avanzamenti: e un caso concreto di sistema operativo verticale.",
      },
    ],
  },
  {
    slug: "web-app",
    icon: "fa-laptop",
    title: "Piattaforme operative",
    shortDescription:
      "Applicazioni e moduli digitali progettati per sostenere processi specifici, con logiche, ruoli e interazioni su misura.",
    cardPoints: [
      "Logiche applicative costruite intorno a casi d'uso concreti.",
      "Esperienza ordinata per operatori, utenti interni o destinatari esterni.",
      "Fondazione tecnica pensata per moduli, integrazioni e crescita progressiva.",
    ],
    idealFor:
      "Progetti che richiedono accessi, workflow, dashboard, aree riservate o funzioni operative non risolvibili con strumenti generici.",
    deliverables: [
      "Struttura applicativa e flussi principali",
      "Schermate chiave, ruoli, accessi e stati",
      "Interfacce responsive per desktop e mobile",
      "Base tecnica per rilasci e miglioramenti successivi",
    ],
    workflow: [
      "Definizione dei casi d'uso e delle priorita",
      "Prototipazione dei passaggi chiave",
      "Sviluppo incrementale delle funzioni",
      "Test dei percorsi operativi piu importanti",
    ],
    faqs: [
      {
        question: "Quando serve una piattaforma operativa?",
        answer:
          "Quando il processo richiede logiche specifiche, accessi, viste dedicate o funzioni che non possono essere gestite con una semplice pagina informativa.",
      },
      {
        question: "Puo evolvere nel tempo?",
        answer:
          "Si. Una piattaforma corretta nasce modulare, cosi ogni evoluzione puo essere integrata senza riscrivere tutto da zero.",
      },
      {
        question: "Che ruolo ha l'AI?",
        answer:
          "L'AI puo supportare analisi, classificazione, assistenza operativa e generazione controllata, ma va integrata con criterio nei flussi reali.",
      },
    ],
  },
  {
    slug: "automazioni",
    icon: "fa-bolt",
    title: "Automazione dei flussi",
    shortDescription:
      "Riduzione dei passaggi manuali attraverso trigger, notifiche, sincronizzazioni, aggiornamenti di stato e controlli operativi.",
    cardPoints: [
      "Automazioni disegnate sui punti critici del processo.",
      "Meno ripetizione manuale e maggiore coerenza dei dati.",
      "Controllo umano mantenuto dove serve responsabilita decisionale.",
    ],
    idealFor:
      "Flussi ripetitivi, comunicazioni operative, stati pratica, sincronizzazioni e passaggi in cui velocita e ordine fanno la differenza.",
    deliverables: [
      "Analisi dei punti ripetitivi del flusso",
      "Automazioni su stati, avvisi e passaggi interni",
      "Connessioni tra strumenti o moduli",
      "Controlli per ridurre errori e duplicazioni",
    ],
    workflow: [
      "Mappatura del processo da alleggerire",
      "Scelta dei passaggi da automatizzare per primi",
      "Implementazione del flusso e gestione eccezioni",
      "Test operativo su casi reali",
    ],
    faqs: [
      {
        question: "Che cosa va automatizzato prima?",
        answer:
          "I passaggi frequenti, ripetitivi e misurabili: stati, notifiche, promemoria, sincronizzazioni, classificazioni e aggiornamenti.",
      },
      {
        question: "L'automazione elimina il controllo umano?",
        answer:
          "No. Un sistema serio automatizza cio che e ripetibile e lascia alle persone le decisioni che richiedono giudizio.",
      },
      {
        question: "Perche e centrale per Lufcore?",
        answer:
          "Perche ogni asset operativo, incluso Infissi360, diventa piu forte quando le azioni ripetitive sono governate da flussi affidabili.",
      },
    ],
  },
  {
    slug: "integrazioni",
    icon: "fa-plug",
    title: "Integrazioni e dati",
    shortDescription:
      "Connessione tra canali, moduli, strumenti e fonti informative per rendere i processi piu coerenti e leggibili.",
    cardPoints: [
      "Riduzione di dati duplicati e passaggi spezzati.",
      "Scambio piu ordinato tra interfacce, canali e sistemi.",
      "Fondazione tecnica pronta per automazioni e letture operative.",
    ],
    idealFor:
      "Sistemi che devono comunicare tra loro senza generare caos, perdita di informazioni o dipendenza da copia-incolla manuale.",
    deliverables: [
      "Analisi delle fonti dati e dei sistemi coinvolti",
      "Punti di collegamento tra strumenti e flussi",
      "Scambi dati o trigger operativi tra moduli",
      "Documentazione essenziale dei collegamenti implementati",
    ],
    workflow: [
      "Raccolta strumenti, ruoli e dati coinvolti",
      "Definizione dei punti di scambio e delle priorita",
      "Implementazione dei collegamenti necessari",
      "Test di affidabilita sui passaggi critici",
    ],
    faqs: [
      {
        question: "Integrare significa cambiare tutto?",
        answer:
          "No. Spesso significa far convivere meglio strumenti esistenti, creando un livello di coordinamento piu affidabile.",
      },
      {
        question: "Perche i dati sono decisivi?",
        answer:
          "Perche senza dati ordinati non esistono automazioni solide, analisi credibili o decisioni operative realmente controllabili.",
      },
      {
        question: "Come si applica a progetti verticali?",
        answer:
          "Un progetto come Infissi360 puo collegare acquisizione, comunicazione, gestione richieste e avanzamenti in un ecosistema piu leggibile.",
      },
    ],
  },
];

export const serviceOverviewStats = [
  {
    label: "Identita",
    value: "Realta tecnologica orientata ad asset digitali proprietari",
  },
  {
    label: "Focus",
    value: "AI applicata, automazioni, dati, flussi e sistemi operativi",
  },
  {
    label: "Asset attivo",
    value: "Infissi360 come primo ecosistema verticale gestito",
  },
];

export const footerColumns = [
  {
    title: "Azienda",
    links: [
      { label: "Home", href: "/" },
      { label: "Chi siamo", href: "/#about" },
      { label: "Tecnologia", href: "/servizi" },
      { label: "Contatti", href: "/#contact-us" },
    ],
  },
  {
    title: "Supporto rapido",
    links: [
      { label: "+39 379 354 7052", href: "tel:+393793547052" },
      { label: "info@lufcore.it", href: "mailto:info@lufcore.it" },
      {
        label: "amministrazione@lufcore.it",
        href: "mailto:amministrazione@lufcore.it",
      },
      { label: "assistenza@lufcore.it", href: "mailto:assistenza@lufcore.it" },
    ],
  },
  {
    title: "Legale",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Cookie", href: "/cookie" },
      { label: "Termini", href: "/termini" },
    ],
  },
];

export const legalQuickLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Cookie", href: "/cookie" },
  { label: "Termini", href: "/termini" },
  { label: "Tecnologia", href: "/servizi" },
];

export const thirdPartyServices = [
  {
    name: "Vercel",
    role: "hosting, distribuzione delle pagine, sicurezza perimetrale e log tecnici",
  },
  {
    name: "Register.it",
    role: "gestione dei servizi email e relativa infrastruttura tecnica",
  },
  {
    name: "Spline",
    role: "libreria e asset grafici 3D utilizzati per sfondi decorativi self-hosted dal dominio Lufcore, senza chiamate dirette ai server Spline durante la navigazione",
  },
  {
    name: "WhatsApp (Meta)",
    role: "canale di contatto esterno attivato esclusivamente dopo il click dell'utente",
  },
  {
    name: "Instagram (Meta)",
    role: "profilo social esterno aperto esclusivamente dopo il click dell'utente",
  },
];

export const privacyDocument = {
  slug: "privacy",
  title: "Privacy Policy",
  eyebrow: "Informativa privacy",
  intro:
    "Questa informativa descrive i trattamenti di dati personali connessi alla navigazione del sito e ai contatti volontari con Lufcore.",
  summary:
    "Il sito non contiene moduli, account, analytics o profilazione. I dati vengono trattati per erogare il sito, proteggerlo e rispondere alle richieste inviate tramite i canali scelti dall'utente.",
  sections: [
    {
      title: "1. Titolare del trattamento",
      paragraphs: [
        `Il titolare del trattamento e Luca Foglieni, ditta individuale operante con il nome commerciale ${siteIdentity.brandName}, P. IVA 04908730163, con sede in ${companyAddress}.`,
        "Per richieste privacy e per l'esercizio dei diritti e possibile scrivere a info@lufcore.it oppure alla PEC infissi360@spidmail.it.",
      ],
    },
    {
      title: "2. Tipologie di dati trattati",
      paragraphs: [
        "Durante la navigazione vengono trattati dati tecnici normalmente trasmessi dai protocolli internet: indirizzo IP, data e ora, URL richiesto, esito della risposta, user agent e informazioni necessarie alla sicurezza e alla consegna delle pagine.",
        "Quando l'utente contatta volontariamente Lufcore tramite email, telefono o WhatsApp possono essere trattati nome, azienda, recapiti, contenuto della richiesta, allegati e informazioni relative al progetto.",
      ],
      list: [
        "dati di navigazione e sicurezza",
        "dati comunicati volontariamente tramite contatto diretto",
        "eventuali informazioni necessarie alla gestione di preventivi, proposte o attivita precontrattuali",
      ],
    },
    {
      title: "3. Finalita e basi giuridiche",
      paragraphs: [
        "I dati vengono utilizzati esclusivamente per le finalita indicate di seguito. Il sito non utilizza i dati di navigazione per pubblicita comportamentale o profilazione.",
      ],
      list: [
        "consegna delle pagine, continuita e sicurezza del servizio: legittimo interesse del titolare a mantenere un sito sicuro e disponibile",
        "risposta a richieste, briefing e preventivi: esecuzione di misure precontrattuali richieste dall'interessato",
        "gestione di rapporti gia avviati: esecuzione del contratto",
        "adempimenti fiscali, amministrativi e richieste delle autorita: obbligo di legge",
        "prevenzione di abusi e difesa di diritti: legittimo interesse del titolare",
      ],
    },
    {
      title: "4. Natura del conferimento",
      paragraphs: [
        "I dati tecnici sono necessari per ricevere le pagine richieste. L'invio di dati tramite i canali di contatto e facoltativo; senza i dati minimi necessari potrebbe non essere possibile rispondere o predisporre una proposta. Non sono richiesti dati particolari o non pertinenti: l'utente e invitato a non inviarli.",
      ],
    },
    {
      title: "5. Modalita di trattamento e tempi di conservazione",
      paragraphs: [
        "Il trattamento avviene con strumenti digitali, accessi limitati e misure proporzionate al rischio, applicando minimizzazione e limitazione della conservazione.",
        "I log tecnici accessibili a Lufcore sono conservati per un massimo di 30 giorni, salvo necessita di analisi di un evento di sicurezza. Le richieste commerciali senza seguito vengono cancellate o anonimizzate entro 12 mesi dall'ultimo contatto. Preventivi, rapporti contrattuali e documenti amministrativi sono conservati fino a 10 anni quando necessario per obblighi fiscali, contabili o tutela dei diritti.",
      ],
    },
    {
      title: "6. Destinatari e fornitori tecnici",
      paragraphs: [
        "I dati possono essere trattati da fornitori che operano come responsabili o autonomi titolari, nei limiti necessari al servizio utilizzato. Non vengono venduti o ceduti per finalita pubblicitarie.",
      ],
      list: thirdPartyServices.map(
        (service) => `${service.name}: ${service.role}.`,
      ),
    },
    {
      title: "7. Trasferimenti verso paesi terzi",
      paragraphs: [
        "L'hosting e i servizi Meta possono comportare accessi o trasferimenti fuori dallo Spazio Economico Europeo. Quando applicabile, i fornitori dichiarano di utilizzare decisioni di adeguatezza, Data Privacy Framework o clausole contrattuali standard. Informazioni sulle garanzie pertinenti possono essere richieste al titolare.",
        "Gli sfondi 3D realizzati con tecnologia Spline sono serviti come asset locali dal dominio Lufcore e non comportano, nella configurazione attuale, richieste dirette ai server Spline durante la navigazione.",
      ],
    },
    {
      title: "8. Diritti dell'interessato",
      paragraphs: [
        "L'interessato puo chiedere accesso, rettifica, cancellazione, limitazione, portabilita e opposizione nei casi previsti dagli articoli 15-22 GDPR. Quando un trattamento e basato sul consenso, questo puo essere revocato in qualsiasi momento senza pregiudicare la liceita precedente.",
        "Le richieste possono essere inviate a info@lufcore.it. E inoltre possibile proporre reclamo al Garante per la protezione dei dati personali tramite www.garanteprivacy.it.",
      ],
    },
    {
      title: "9. Decisioni automatizzate, marketing e minori",
      paragraphs: [
        "Il sito non effettua profilazione, decisioni automatizzate, marketing diretto o raccolta intenzionale di dati di minori. Non e previsto un servizio rivolto specificamente a persone di eta inferiore a 18 anni.",
      ],
    },
    {
      title: "10. Sicurezza e aggiornamenti",
      paragraphs: [
        `L'informativa viene riesaminata quando cambiano servizi, fornitori o trattamenti. La versione corrente e stata aggiornata il ${siteIdentity.updatedAt}.`,
      ],
    },
  ],
};

export const cookieDocument = {
  slug: "cookie",
  title: "Cookie Policy",
  eyebrow: "Cookie e tecnologie simili",
  intro:
    "Questa pagina descrive l'uso di cookie e tecnologie simili sul sito Lufcore alla data di ultimo aggiornamento indicata sotto.",
  summary:
    "Il sito non utilizza cookie di analytics, profilazione o marketing. Font, immagini e componenti visuali, inclusi gli sfondi 3D basati su Spline, sono serviti dal dominio Lufcore.",
  sections: [
    {
      title: "1. Cosa sono i cookie",
      paragraphs: [
        "I cookie sono piccoli file che un sito o un servizio terzo puo salvare sul dispositivo dell'utente per consentire funzioni tecniche, ricordare preferenze o raccogliere informazioni statistiche e di profilazione.",
      ],
    },
    {
      title: "2. Assetto attuale del sito",
      paragraphs: [
        "Alla data di aggiornamento il codice non configura cookie applicativi, analytics, advertising, retargeting, heatmap o profilazione. Il server puo trattare log tecnici necessari a consegna, sicurezza e diagnosi senza utilizzarli per seguire l'utente a fini commerciali.",
        "Font, immagini e componenti visuali sono caricati localmente. Gli sfondi 3D usano file Spline self-hosted dal dominio Lufcore. WhatsApp e Instagram ricevono una richiesta soltanto quando l'utente sceglie di aprire il relativo link.",
      ],
      list: [
        "cookie opzionali impostati da Lufcore: nessuno",
        "analytics e pixel marketing: nessuno",
        "preferenze salvate nel browser dal centro privacy: nessuna",
        "risorse visuali Spline: caricate localmente dal dominio Lufcore, senza chiamate automatiche a server Spline",
      ],
    },
    {
      title: "3. Tecnologie strettamente necessarie",
      paragraphs: [
        "La consegna delle pagine e la sicurezza possono richiedere dati di rete e meccanismi tecnici del provider di hosting. Questi elementi non sono utilizzati da Lufcore per profilare l'utente e non possono essere disattivati dal centro privacy senza impedire il servizio richiesto.",
      ],
    },
    {
      title: "4. Base giuridica e gestione del consenso",
      paragraphs: [
        "Per le tecnologie strettamente necessarie non viene richiesto il consenso preventivo, fermo restando l'obbligo di informazione e l'applicazione della normativa sulla protezione dei dati.",
        "Poiche non sono attive finalita opzionali, un banner Accetta/Rifiuta sarebbe fuorviante. Il centro privacy rende sempre accessibile lo stato corrente. Qualsiasi futura tecnologia non necessaria dovra essere bloccata fino a una scelta libera, specifica e revocabile.",
      ],
    },
    {
      title: "5. Fornitori e collegamenti esterni",
      paragraphs: [
        "Vercel fornisce hosting e sicurezza tecnica. WhatsApp e Instagram sono semplici collegamenti esterni: dopo il click si applicano le policy di Meta e il sito di destinazione puo utilizzare proprie tecnologie.",
      ],
      list: thirdPartyServices.map((service) => `${service.name}: ${service.role}.`),
    },
    {
      title: "6. Come gestire o bloccare i cookie",
      paragraphs: [
        "L'utente puo controllare o cancellare cookie e dati locali dalle impostazioni del browser. Al momento Lufcore non salva preferenze opzionali nel dispositivo. Il centro privacy, accessibile in ogni pagina, mostra l'assetto corrente.",
      ],
    },
    {
      title: "7. Aggiornamenti",
      paragraphs: [
        `La configurazione deve essere riesaminata prima di attivare analytics, embed, pixel, chat o altri servizi. Ultimo aggiornamento verificato: ${siteIdentity.updatedAt}.`,
      ],
    },
  ],
};

export const termsDocument = {
  slug: "termini",
  title: "Termini di utilizzo",
  eyebrow: "Condizioni d'uso del sito",
  intro:
    "Questi termini regolano l'utilizzo del sito Lufcore e dei contenuti pubblicati online a fini informativi e commerciali.",
  summary:
    "Il sito presenta servizi e contatti. Non consente acquisti, registrazioni o abbonamenti e non conclude automaticamente contratti.",
  sections: [
    {
      title: "1. Oggetto del sito",
      paragraphs: [
        `Il sito e gestito da Luca Foglieni, ditta individuale operante con il nome commerciale ${siteIdentity.brandName}, P. IVA 04908730163, con sede in ${companyAddress}.`,
        "Il sito ha finalita informative e commerciali. Non costituisce una piattaforma di commercio elettronico e non perfeziona automaticamente contratti, acquisti o abbonamenti.",
      ],
    },
    {
      title: "2. Accuratezza delle informazioni",
      paragraphs: [
        "I contenuti descrivono in modo generale servizi e metodo di lavoro. Disponibilita, caratteristiche, tempi e prezzi vengono definiti nella proposta applicabile. Errori o contenuti non aggiornati possono essere segnalati a info@lufcore.it.",
      ],
    },
    {
      title: "3. Richieste, preventivi e proposte",
      paragraphs: [
        "Le richieste inviate tramite email, telefono o WhatsApp non costituiscono accettazione di un incarico. Oggetto, corrispettivo, tempi, responsabilita e trattamento dei dati vengono definiti nel preventivo o contratto specifico, che prevale su questi termini.",
      ],
    },
    {
      title: "4. Proprieta intellettuale",
      paragraphs: [
        "Testi e materiali originali di Lufcore sono protetti dalla normativa applicabile. Marchi, librerie, componenti e materiali di terzi restano dei rispettivi titolari e sono utilizzati secondo le relative licenze. Nessuna disposizione trasferisce diritti di proprieta intellettuale all'utente.",
      ],
    },
    {
      title: "5. Uso consentito del sito",
      paragraphs: [
        "Non e consentito utilizzare il sito in modo illecito, interferire con la sicurezza, tentare accessi non autorizzati, automatizzare richieste abusive o utilizzare i recapiti per spam, frodi o attivita lesive.",
      ],
    },
    {
      title: "6. Collegamenti a servizi terzi",
      paragraphs: [
        "Il sito contiene collegamenti a servizi esterni, tra cui WhatsApp, Instagram e siti di progetti. L'apertura avviene su iniziativa dell'utente; disponibilita, sicurezza e trattamento dei dati sul sito esterno dipendono dal relativo gestore.",
      ],
    },
    {
      title: "7. Limitazione di responsabilita",
      paragraphs: [
        "Nei limiti consentiti dalla legge, Lufcore non garantisce disponibilita ininterrotta del sito e non risponde di disservizi imputabili a infrastrutture o siti terzi. Restano ferme le responsabilita inderogabili e i diritti riconosciuti al consumatore, quando applicabili.",
      ],
    },
    {
      title: "8. Segnalazioni e sicurezza",
      paragraphs: [
        "Problemi tecnici, contenuti illeciti o vulnerabilita possono essere segnalati ad assistenza@lufcore.it. Le segnalazioni devono essere effettuate in buona fede, senza accedere, alterare o diffondere dati non autorizzati.",
      ],
    },
    {
      title: "9. Legge applicabile e foro",
      paragraphs: [
        "I termini sono regolati dalla legge italiana. Per i consumatori resta competente il foro previsto dalle norme inderogabili; negli altri casi la competenza viene definita dal contratto applicabile o dalle regole ordinarie.",
      ],
    },
    {
      title: "10. Aggiornamenti",
      paragraphs: [
        `I presenti termini possono essere aggiornati nel tempo in funzione dell'evoluzione del sito, dei servizi offerti o del quadro normativo applicabile. Ultimo aggiornamento: ${siteIdentity.updatedAt}.`,
      ],
    },
  ],
};

export const legalDocuments = {
  privacy: privacyDocument,
  cookie: cookieDocument,
  termini: termsDocument,
};

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}
