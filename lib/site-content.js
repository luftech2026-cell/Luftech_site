export const siteIdentity = {
  brandName: "Lufcore",
  siteLabel: "Lufcore",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.lufcore.it",
  heroEyebrow: "Lufcore",
  heroTitle: "Siti web, gestionali e web app costruiti per il lavoro",
  heroTitleAccent: "reale.",
  heroIntro:
    "Progettiamo strumenti digitali chiari, veloci e su misura per aziende, professionisti e attivita che vogliono lavorare meglio online.",
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
  "https://wa.me/393793547052?text=Buongiorno%2C%20vorrei%20ricevere%20maggiori%20informazioni%20sui%20servizi%20web%20di%20Lufcore.";

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
  "Primo riscontro operativo entro 1 giorno lavorativo.",
  "Brief iniziale per capire obiettivi, strumenti gia presenti e priorita.",
  "Stima, proposta o piano di lavoro solo dopo raccolta requisiti reali.",
];

export const serviceProcess = [
  {
    title: "Analisi",
    text: "Raccogliamo obiettivi, vincoli, strumenti gia in uso e priorita operative.",
  },
  {
    title: "Prototipo",
    text: "Definiamo struttura, flusso, contenuti e funzioni essenziali prima dello sviluppo completo.",
  },
  {
    title: "Sviluppo",
    text: "Costruiamo il progetto, testiamo i percorsi chiave e puliamo il lavoro sui casi reali.",
  },
  {
    title: "Consegna",
    text: "Rilasciamo documentazione minima, contatti di supporto e prossimi passi consigliati.",
  },
];

export const services = [
  {
    slug: "siti-web",
    icon: "fa-globe",
    title: "Siti web",
    shortDescription:
      "Landing page, siti aziendali e pagine commerciali veloci, chiare e pensate per presentarti bene online.",
    cardPoints: [
      "Architettura delle pagine chiara e orientata alla conversione.",
      "Copy, CTA e contenuti ordinati per far capire subito cosa fai.",
      "Base tecnica pulita per SEO, aggiornamenti e manutenzione futura.",
    ],
    idealFor:
      "Aziende, professionisti e attivita che vogliono una presenza online credibile e facile da gestire.",
    deliverables: [
      "Home page o landing principale",
      "Pagine servizi, contatti e sezioni istituzionali",
      "Copy base, CTA, collegamenti WhatsApp, email e telefono",
      "Setup tecnico iniziale e supporto al go-live",
    ],
    workflow: [
      "Analisi di obiettivo, pubblico e posizionamento",
      "Mappa pagine e contenuti",
      "Sviluppo frontend e rifinitura responsive",
      "Test finale e pubblicazione",
    ],
    faqs: [
      {
        question: "Quando serve un sito vetrina e quando una landing?",
        answer:
          "Una landing lavora su una singola offerta o campagna. Un sito vetrina serve quando devi raccontare meglio azienda, servizi, contatti e credibilita generale.",
      },
      {
        question: "Posso partire con una struttura minima?",
        answer:
          "Si. Possiamo costruire una base essenziale e poi estenderla con nuove pagine, casi studio o moduli specifici.",
      },
      {
        question: "Il sito puo essere aggiornato in seguito?",
        answer:
          "Si. Il progetto viene pensato per poter aggiungere contenuti, sezioni o integrazioni in modo ordinato.",
      },
    ],
  },
  {
    slug: "gestionali",
    icon: "fa-cogs",
    title: "Gestionali",
    shortDescription:
      "Strumenti su misura per clienti, ordini, flussi interni, documenti e organizzazione del lavoro quotidiano.",
    cardPoints: [
      "Interfacce semplici per chi deve lavorare, non perdere tempo.",
      "Flussi costruiti sui tuoi passaggi reali, non su un software generico.",
      "Ruoli, stato pratiche, anagrafiche e storico centralizzati.",
    ],
    idealFor:
      "Team che oggi lavorano con file sparsi, chat, fogli condivisi o procedure manuali difficili da controllare.",
    deliverables: [
      "Dashboard operative e aree riservate",
      "Anagrafiche, stati pratica, note e cronologia",
      "Permessi per ruoli o utenti",
      "Report semplici e funzioni chiave del flusso",
    ],
    workflow: [
      "Mappatura del processo attuale",
      "Individuazione di passaggi critici e colli di bottiglia",
      "Prototipo del flusso gestionale",
      "Sviluppo iterativo delle funzioni core",
    ],
    faqs: [
      {
        question: "Conviene sviluppare un gestionale personalizzato?",
        answer:
          "Conviene quando gli strumenti standard non seguono il tuo flusso o costringono il team a lavorare fuori dal sistema con file e workaround.",
      },
      {
        question: "Si puo partire da un modulo piccolo?",
        answer:
          "Si. In molti casi e meglio partire da una funzione chiave, validarla e poi espandere il gestionale a step.",
      },
      {
        question: "E possibile sostituire gradualmente strumenti esistenti?",
        answer:
          "Si. La transizione puo essere fatta per moduli, cosi il team non viene bloccato da un cambio totale tutto insieme.",
      },
    ],
  },
  {
    slug: "web-app",
    icon: "fa-laptop",
    title: "Web app",
    shortDescription:
      "Applicazioni web costruite per risolvere esigenze reali con accessi, logiche operative e flussi piu articolati.",
    cardPoints: [
      "Prodotto pensato intorno al caso d'uso, non attorno a funzioni casuali.",
      "Esperienza chiara sia per utenti interni sia per clienti finali.",
      "Base tecnica pronta per evoluzioni, moduli e integrazioni successive.",
    ],
    idealFor:
      "Progetti digitali che richiedono login, logiche personalizzate, dashboard, aree cliente o strumenti operativi online.",
    deliverables: [
      "Struttura dell'applicazione e flussi principali",
      "Schermate chiave, ruoli, accessi e stati operativi",
      "Interfaccia responsive per desktop e mobile",
      "Supporto alla messa online e ai rilasci successivi",
    ],
    workflow: [
      "Definizione dei casi d'uso e delle priorita",
      "Prototipo delle schermate e dei passaggi chiave",
      "Sviluppo incrementale delle funzioni",
      "Test sui percorsi operativi piu importanti",
    ],
    faqs: [
      {
        question: "Qual e la differenza tra gestionale e web app?",
        answer:
          "Un gestionale e una categoria di web app focalizzata sui processi interni. Una web app puo anche essere rivolta a clienti, partner o utenti esterni.",
      },
      {
        question: "Possiamo costruire una MVP e poi crescere?",
        answer:
          "Si. E uno degli approcci migliori quando bisogna validare il flusso prima di investire su moduli piu ampi.",
      },
      {
        question: "Si puo progettare con accessi diversi per utente?",
        answer:
          "Si. Ruoli, permessi e visibilita dei dati vengono pianificati gia dalla fase iniziale del progetto.",
      },
    ],
  },
  {
    slug: "automazioni",
    icon: "fa-bolt",
    title: "Automazioni",
    shortDescription:
      "Automazioni su misura per ridurre lavoro ripetitivo, errori manuali e passaggi lenti tra persone, file e strumenti.",
    cardPoints: [
      "Invii automatici, notifiche, aggiornamenti di stato e task ricorrenti.",
      "Flussi costruiti sul tuo processo reale, non su workaround improvvisati.",
      "Meno passaggi manuali e piu controllo su tempi, dati e attivita ripetitive.",
    ],
    idealFor:
      "Aziende e professionisti che perdono tempo con copia-incolla, promemoria manuali, aggiornamenti ripetuti o processi spezzati.",
    deliverables: [
      "Analisi dei punti ripetitivi del flusso",
      "Automazioni operative su stati, avvisi o passaggi interni",
      "Connessioni tra strumenti o aree del progetto",
      "Controlli base per evitare errori e duplicazioni",
    ],
    workflow: [
      "Mappatura del processo da alleggerire",
      "Scelta dei passaggi da automatizzare per primi",
      "Implementazione del flusso e gestione eccezioni",
      "Test operativo su casi reali",
    ],
    faqs: [
      {
        question: "Che tipo di attivita si possono automatizzare?",
        answer:
          "Promemoria, aggiornamenti di stato, invii interni, passaggi tra reparti, creazione task, sincronizzazioni e molte attivita ripetitive legate a clienti, pratiche o ordini.",
      },
      {
        question: "Serve rifare tutto il sistema per iniziare?",
        answer:
          "No. Possiamo partire da un collo di bottiglia preciso e automatizzare quello prima di estendere il resto del flusso.",
      },
      {
        question: "Le automazioni sostituiscono il controllo umano?",
        answer:
          "No. L'obiettivo e togliere lavoro ripetitivo e rendere il processo piu affidabile, lasciando alle persone il controllo dove serve davvero.",
      },
    ],
  },
  {
    slug: "integrazioni",
    icon: "fa-plug",
    title: "Integrazioni",
    shortDescription:
      "Colleghiamo aree riservate, gestionali, moduli e strumenti diversi per farli lavorare insieme in modo piu ordinato.",
    cardPoints: [
      "Riduzione dei dati duplicati e dei passaggi da rifare a mano.",
      "Scambio piu chiaro tra pannelli interni, aree cliente e strumenti esterni.",
      "Base tecnica pronta per crescere senza aggiungere caos operativo.",
    ],
    idealFor:
      "Team che usano piu strumenti insieme e vogliono evitare passaggi spezzati, dati sparsi o sincronizzazioni fatte a mano.",
    deliverables: [
      "Analisi dei sistemi gia presenti",
      "Punti di collegamento tra strumenti e flussi",
      "Scambi dati o trigger operativi tra moduli",
      "Documentazione minima dei collegamenti implementati",
    ],
    workflow: [
      "Raccolta strumenti, ruoli e dati coinvolti",
      "Definizione dei punti di scambio e delle priorita",
      "Implementazione dei collegamenti necessari",
      "Test di affidabilita sui passaggi critici",
    ],
    faqs: [
      {
        question: "Integrare significa cambiare tutto quello che uso oggi?",
        answer:
          "No. In molti casi l'obiettivo e proprio far convivere meglio strumenti gia presenti senza stravolgere subito il lavoro interno.",
      },
      {
        question: "Si possono collegare aree cliente e flussi interni?",
        answer:
          "Si. E uno dei casi piu utili: dati e stati restano piu coerenti tra chi lavora dentro e chi accede da fuori.",
      },
      {
        question: "Conviene integrare prima o rifare il sistema?",
        answer:
          "Dipende dal contesto. A volte conviene creare un ponte tra strumenti esistenti, altre volte e meglio sostituire gradualmente la parte piu fragile.",
      },
    ],
  },
];

export const serviceOverviewStats = [
  {
    label: "Ambito",
    value: "Siti, gestionali, web app, automazioni e integrazioni",
  },
  {
    label: "Metodo",
    value: "Analisi, prototipo, sviluppo, consegna",
  },
  {
    label: "Risposta",
    value: "Primo riscontro entro 1 giorno lavorativo",
  },
];

export const footerColumns = [
  {
    title: "Azienda",
    links: [
      { label: "Home", href: "/" },
      { label: "Chi siamo", href: "/#about" },
      { label: "Servizi", href: "/servizi" },
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
  { label: "Servizi", href: "/servizi" },
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
    "Il sito non utilizza cookie di analytics, profilazione o marketing. Font, immagini e componenti visuali sono serviti dal dominio Lufcore.",
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
        "Font, immagini e componenti visuali sono caricati localmente. WhatsApp e Instagram ricevono una richiesta soltanto quando l'utente sceglie di aprire il relativo link.",
      ],
      list: [
        "cookie opzionali impostati da Lufcore: nessuno",
        "analytics e pixel marketing: nessuno",
        "preferenze salvate nel browser dal centro privacy: nessuna",
        "risorse visuali di terzi caricate automaticamente: nessuna",
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
