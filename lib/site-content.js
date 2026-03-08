export const siteIdentity = {
  brandName: "Lufcore",
  siteLabel: "Lufcore",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://lufcore.it",
  heroScene: "https://prod.spline.design/61HzWO8T8xsozPZn/scene.splinecode",
  heroEyebrow: "Lufcore",
  heroTitle: "Siti web, gestionali e web app costruiti per il lavoro",
  heroTitleAccent: "reale.",
  heroIntro:
    "Progettiamo strumenti digitali chiari, veloci e su misura per aziende, professionisti e attivita che vogliono lavorare meglio online.",
  responseWindow: "entro 1 giorno lavorativo",
  updatedAt: "8 marzo 2026",
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
  "https://wa.me/393793547052?text=Ciao%20Lufcore,%20vorrei%20informazioni%20su%20siti,%20gestionali%20o%20web%20app.";

export const companyDetails = [
  { label: "Ragione sociale", value: "Lufcore" },
  { label: "P. IVA", value: "Da confermare" },
  { label: "PEC", value: "Da confermare" },
  { label: "Sede", value: "Italia" },
];

export const companyStatusNote =
  "I dati societari definitivi saranno aggiornati appena confermati dal titolare. La struttura delle pagine legali e dei riferimenti di contatto e gia pronta per l'inserimento finale.";

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
    name: "Google Fonts",
    role: "caricamento remoto del font Raleway tramite fonts.googleapis.com",
  },
  {
    name: "UNPKG",
    role: "distribuzione dello script pubblico del viewer Spline",
  },
  {
    name: "Spline",
    role: "caricamento e rendering delle scene 3D pubblicate su prod.spline.design",
  },
  {
    name: "WhatsApp",
    role: "apertura del canale di contatto solo dopo click esplicito dell'utente",
  },
];

export const privacyDocument = {
  slug: "privacy",
  title: "Privacy Policy",
  eyebrow: "Informativa privacy",
  intro:
    "Questa informativa descrive come Lufcore tratta i dati personali raccolti tramite il sito e tramite i canali di contatto pubblicati online.",
  summary:
    "Il contenuto e strutturato per coprire navigazione del sito, richieste di contatto, basi giuridiche del trattamento, destinatari e diritti dell'interessato.",
  sections: [
    {
      title: "1. Titolare del trattamento",
      paragraphs: [
        `Il titolare del trattamento e ${siteIdentity.brandName}, raggiungibile tramite i canali pubblicati sul sito: info@lufcore.it, amministrazione@lufcore.it, assistenza@lufcore.it e +39 379 3547052.`,
        companyStatusNote,
      ],
    },
    {
      title: "2. Tipologie di dati trattati",
      paragraphs: [
        "Durante la normale navigazione il sito puo trattare dati tecnici come indirizzo IP, user agent, log di rete, riferimenti tecnici della richiesta e dati necessari alla sicurezza e al corretto caricamento delle pagine.",
        "Quando l'utente sceglie di contattare Lufcore tramite telefono, email o WhatsApp possono essere trattati i dati volontariamente inviati, ad esempio nome, azienda, recapiti, contenuto della richiesta, allegati e informazioni progettuali.",
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
        "I dati vengono trattati per garantire il funzionamento tecnico del sito, rispondere alle richieste ricevute, gestire attivita precontrattuali o contrattuali e adempiere a eventuali obblighi di legge.",
      ],
      list: [
        "erogazione tecnica del sito e sicurezza dell'infrastruttura: legittimo interesse del titolare",
        "gestione di richieste di contatto, preventivi e briefing: misure precontrattuali richieste dall'interessato",
        "adempimenti amministrativi o normativi: obbligo di legge",
        "difesa di diritti del titolare in caso di contestazioni: legittimo interesse",
      ],
    },
    {
      title: "4. Natura del conferimento",
      paragraphs: [
        "La navigazione tecnica comporta il trattamento dei soli dati necessari a consegnare le pagine. Il conferimento dei dati nei canali di contatto e facoltativo, ma il mancato invio dei dati minimi necessari puo rendere impossibile ottenere una risposta o una proposta.",
      ],
    },
    {
      title: "5. Modalita di trattamento e tempi di conservazione",
      paragraphs: [
        "Il trattamento avviene con strumenti digitali e organizzativi adeguati al tipo di attivita svolta, secondo criteri di necessita, pertinenza e minimizzazione.",
        "I dati tecnici vengono conservati per il tempo strettamente necessario alla sicurezza, al funzionamento e alla gestione dell'infrastruttura. I dati inviati per richieste commerciali o operative vengono conservati per il tempo necessario a gestire il rapporto, eventuali follow-up e adempimenti collegati.",
      ],
    },
    {
      title: "6. Destinatari e fornitori tecnici",
      paragraphs: [
        "Per il funzionamento del sito alcuni dati tecnici possono transitare presso fornitori terzi che erogano componenti o risorse necessarie al caricamento delle pagine.",
      ],
      list: thirdPartyServices.map(
        (service) => `${service.name}: ${service.role}.`,
      ),
    },
    {
      title: "7. Trasferimenti verso paesi terzi",
      paragraphs: [
        "L'utilizzo di fornitori internazionali puo comportare il trasferimento di dati tecnici verso paesi esterni allo SEE oppure l'accesso da parte di infrastrutture distribuite geograficamente. In tali casi il trattamento avviene secondo le basi giuridiche e le garanzie rese disponibili dai rispettivi fornitori.",
      ],
    },
    {
      title: "8. Diritti dell'interessato",
      paragraphs: [
        "L'interessato puo chiedere accesso, rettifica, aggiornamento, cancellazione, limitazione del trattamento, opposizione e portabilita nei casi previsti dalla normativa applicabile. Puo inoltre proporre reclamo all'autorita di controllo competente, in Italia il Garante per la protezione dei dati personali.",
        "Per esercitare i diritti e possibile scrivere ai recapiti pubblicati sul sito indicando con chiarezza la richiesta.",
      ],
    },
    {
      title: "9. Aggiornamenti della presente informativa",
      paragraphs: [
        `Questa informativa puo essere aggiornata in caso di variazioni dei servizi, dei fornitori tecnici o delle modalita di trattamento. Ultimo aggiornamento: ${siteIdentity.updatedAt}.`,
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
    "La policy riflette l'assetto tecnico attuale del progetto: nessun analytics o pixel di marketing configurato dal titolare, presenza di risorse tecniche esterne per font e componenti Spline.",
  sections: [
    {
      title: "1. Cosa sono i cookie",
      paragraphs: [
        "I cookie sono piccoli file che un sito o un servizio terzo puo salvare sul dispositivo dell'utente per consentire funzioni tecniche, ricordare preferenze o raccogliere informazioni statistiche e di profilazione.",
      ],
    },
    {
      title: "2. Tecnologie attualmente rilevate sul sito",
      paragraphs: [
        "Alla data di aggiornamento di questa policy il sito non integra strumenti di analytics, advertising o profilazione configurati direttamente dal titolare.",
        "Il caricamento del sito puo comunque coinvolgere componenti tecniche o richieste di rete verso fornitori esterni indispensabili per font e scene 3D.",
      ],
      list: [
        "cookie o elementi tecnici strettamente necessari alla consegna delle pagine e alla sicurezza dell'infrastruttura",
        "caricamento remoto di Raleway tramite Google Fonts",
        "caricamento dello script viewer tramite UNPKG",
        "caricamento delle scene 3D tramite Spline",
      ],
    },
    {
      title: "3. Cosa non e attivo al momento",
      paragraphs: [
        "Non risultano configurati nel codice attuale del sito strumenti di web analytics, profilazione pubblicitaria, retargeting, heatmap o tracciamento marketing lato titolare.",
      ],
      list: [
        "nessun pixel Meta o simili",
        "nessun Google Analytics o Google Tag Manager configurato",
        "nessun sistema di profilazione automatica o remarketing configurato",
      ],
    },
    {
      title: "4. Base giuridica e gestione del consenso",
      paragraphs: [
        "I soli elementi tecnici necessari al funzionamento del sito vengono gestiti sulla base del legittimo interesse del titolare a erogare il servizio richiesto dall'utente.",
        "Poiche al momento non sono attivati strumenti di profilazione o analytics non tecnici configurati dal titolare, il sito non espone un banner separato per finalita marketing. Se in futuro saranno introdotti strumenti non tecnici, la presente policy e l'eventuale meccanismo di consenso saranno aggiornati prima dell'attivazione.",
      ],
    },
    {
      title: "5. Fornitori tecnici esterni",
      paragraphs: [
        "L'uso di risorse caricate da domini terzi puo comportare la trasmissione di dati tecnici come indirizzo IP, user agent, referer e metadati di rete ai rispettivi fornitori.",
      ],
      list: thirdPartyServices.map(
        (service) => `${service.name}: ${service.role}.`,
      ),
    },
    {
      title: "6. Come gestire o bloccare i cookie",
      paragraphs: [
        "L'utente puo gestire, limitare o cancellare i cookie tramite le impostazioni del proprio browser. Il blocco dei cookie tecnici o delle richieste a domini necessari puo compromettere il corretto caricamento del sito o delle scene Spline.",
      ],
    },
    {
      title: "7. Aggiornamenti",
      paragraphs: [
        `La cookie policy viene aggiornata quando cambia lo stack tecnico del sito o quando vengono introdotte nuove integrazioni. Ultimo aggiornamento: ${siteIdentity.updatedAt}.`,
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
    "Il sito presenta servizi, contatti e materiali informativi. Eventuali rapporti professionali vengono comunque disciplinati da accordi o preventivi specifici.",
  sections: [
    {
      title: "1. Oggetto del sito",
      paragraphs: [
        "Il sito ha finalita informative e commerciali: presenta i servizi Lufcore, i recapiti di contatto e una panoramica delle possibili attivita digitali realizzabili.",
        "Il sito non costituisce piattaforma di commercio elettronico e non perfeziona da solo contratti di vendita o sviluppo software.",
      ],
    },
    {
      title: "2. Accuratezza delle informazioni",
      paragraphs: [
        "Lufcore si impegna a mantenere aggiornati i contenuti, ma non garantisce che ogni informazione sia sempre completa, priva di errori o perfettamente allineata a eventuali variazioni operative, commerciali o normative intervenute successivamente.",
      ],
    },
    {
      title: "3. Richieste, preventivi e proposte",
      paragraphs: [
        "Le richieste inviate tramite sito, email, telefono o WhatsApp non comportano automaticamente l'accettazione di un incarico. Preventivi, offerte, tempi e perimetro del lavoro vengono definiti solo dopo analisi e conferma reciproca.",
      ],
    },
    {
      title: "4. Proprieta intellettuale",
      paragraphs: [
        "Testi, struttura del sito, elementi grafici, marchi, materiali originali e contenuti realizzati per Lufcore sono protetti dalle norme applicabili in materia di proprieta intellettuale e non possono essere copiati, riprodotti o riutilizzati senza autorizzazione.",
      ],
    },
    {
      title: "5. Uso consentito del sito",
      paragraphs: [
        "L'utente si impegna a non usare il sito in modo illecito, lesivo, fraudolento o tale da compromettere disponibilita, sicurezza o reputazione del progetto. Non e consentito tentare accessi non autorizzati, scraping aggressivo o uso improprio dei recapiti pubblicati.",
      ],
    },
    {
      title: "6. Collegamenti a servizi terzi",
      paragraphs: [
        "Il sito puo contenere link o rimandi a servizi esterni, ad esempio WhatsApp o fornitori tecnici. Lufcore non controlla contenuti, policy o condizioni applicate da tali soggetti e invita a consultare la relativa documentazione prima dell'uso.",
      ],
    },
    {
      title: "7. Limitazione di responsabilita",
      paragraphs: [
        "Salvo dolo o colpa grave nei limiti di legge, Lufcore non risponde di danni indiretti, interruzioni temporanee del sito, indisponibilita di servizi terzi, o decisioni prese dall'utente sulla sola base dei contenuti informativi pubblicati online.",
      ],
    },
    {
      title: "8. Legge applicabile",
      paragraphs: [
        "I presenti termini sono regolati dalla legge italiana, salvo norme inderogabili eventualmente applicabili in favore del consumatore o dell'utente avente diritto.",
      ],
    },
    {
      title: "9. Aggiornamenti",
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
