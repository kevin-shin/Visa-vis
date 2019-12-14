import moment from "moment";

export const MOCK_TASKS = [
  {
    id: 0,
    date: "2020-03-15",
    checked: false,
    title: "Copy of passport photo page",
    description: "Two passport-style photos taken within 30 days at FedEx, Walgreens, CVS, etc. Write your name and I-94 lightly in pencil or felt pen on the back of the photos (or card envelope if available).",
    notes: "",
    subTasks: [
      {
        id: 0,
        title: "Bring a pen or pencil to write information on photos",
        checked: false
      }
    ],
    actionItems: [
      {
        id: 0,
        title: "Click for more info",
        link: "https://travel.state.gov/content/travel/en/passports/how-apply/photos.html"
      },
      {
        id: 1,
        title: "Example photos",
        link: "https://travel.state.gov/content/travel/en/passports/how-apply/photos.html"
      }
    ]
  },
  {
    id: 1,
    date: "2020-04-01",
    checked: false,
    title: "OPT application supplement",
    description: "Macalester requires you to complete this form BEFORE your appointment with an ISP staff member to review your OPT or OPT STEM (after you complete 12-month OPT) application in order to issue a new I-20 to include with your application.",
    notes: "Your OPT or OPT STEM application must be received by USCIS within 30 days of I-20 issuance; the consequence for not doing so is rejection of your OPT or OPT STEM application.",
    subTasks: [
      {
        id: 0,
        title: "Fill out the application supplement",
        checked: false
      }
    ],
    actionItems: [
      {
        id: 0,
        title: "Click for more info",
        link: "https://www.macalester.edu/isp/governmentregulations/employmentpostmac/#opt"
      },
      {
        id: 1,
        title: "Show me the form",
        link: "https://docs.google.com/forms/d/e/1FAIpQLScxOI4jI86El6_QKMqZqqdB7NeA0O8yWEd4C_vo0kDTiw-3RQ/viewform"
      }
    ]
  },
  {
    id: 2,
    date: "2020-04-07",
    checked: false,
    title: "Check/Money order",
    description: "Check or money order made out to the Department of Homeland Security. The application fee is $410. Payment with a valid credit card is possible with Form G-1450 Authorization for Credit Card Transactions.",
    notes: "",
    subTasks: [
      {
        id: 0,
        title: "Learn how to fill out a check/money order",
        checked: false
      }
    ],
    actionItems: [
      {
        id: 0,
        title: "Click for more info",
        link: "https://www.macalester.edu/isp/governmentregulations/employmentpostmac/#opt"
      },
      {
        id: 1,
        title: "How to write a check",
        link: "https://www.macalester.edu/isp/wp-content/uploads/sites/95/2017/02/HowToWriteACheck.pdf"
      },
      {
        id: 2,
        title: "Pay with credit card",
        link: "https://www.uscis.gov/forms/fingerprints/pay-a-credit-card"
      }
    ]
  },
  {
    id: 3,
    date: "2020-04-10",
    checked: false,
    title: "Form G-1145",
    description: "Form F-1145 is submitted to request USCIS sends you a text message or email when they have received your application. Filling out this form is *optional* but recommended by ISP.",
    notes: "",
    subTasks: [
      {
        id: 0,
        title: "Download the form from the USCIS website",
        checked: false
      }
    ],
    actionItems: [
      {
        id: 0,
        title: "Click for more info",
        link: "https://www.macalester.edu/isp/governmentregulations/employmentpostmac/#opt"
      },
      {
        id: 1,
        title: "Download form",
        link: "https://www.uscis.gov/system/files_force/files/form/g-1145.pdf?download=1"
      }
    ]
  },
  {
    id: 4,
    date: "2020-04-15",
    checked: false,
    title: "Form I-765",
    description: "Form I-765 is the actual form to apply for work authorization to USCIS. All pages must be submitted, even when blank. Follow the directions below, provided by ISP on best practices to fill out this form.",
    notes: "",
    subTasks: [
      {
        id: 0,
        title: "For Line 1.a., check 'Initial permission to accept employment.",
        checked: false
      },
      {
        id: 1,
        title: "For Lines 5.a. - 7.d., If you authorize ISP to open your mail, make sure to put “c/o ISP, 1600 Grand Ave, St Paul, MN 55105” as your mailing address on the Form I-765 and put your actual address as your physical address.",
        checked: false
      },
      {
        id: 2,
        title: "For Line 27 Eligibility Category, enter code (c) (3) (B) for post-completion or graduation OPT; (c) (3) (C) is for STEM OPT extension, and (c) (3) (A) is for pre-completion.",
        checked: false
      }
    ],
    actionItems: [
      {
        id: 0,
        title: "Click for more info",
        link: "https://www.macalester.edu/isp/governmentregulations/employmentpostmac/#opt"
      },
      {
        id: 1,
        title: "Download form",
        link: "https://www.uscis.gov/system/files_force/files/form/i-765.pdf?download=1"
      }
    ]
  },
  {
    id: 5,
    date: "2020-04-20",
    checked: false,
    title: "Copy of F-1 visa page",
    description: "Copy of F-1 visa page typically found in your passport.",
    notes: "",
    subTasks: [
      {
        id: 0,
        title: "Make a copy of F-1 page",
        checked: false
      }
    ],
    actionItems: [
      {
        id: 0,
        title: "Click for more info",
        link: "https://www.macalester.edu/isp/governmentregulations/employmentpostmac/#opt"
      }
    ]
  },
  {
    id: 6,
    date: "2020-04-25",
    checked: false,
    title: "Copy of most recent I-94",
    description: "You may access the form I-94 on the DHS website",
    notes: "",
    subTasks: [
      {
        id: 0,
        title: "Enter the necessary information and download your most recent form I-94",
        checked: false
      }
    ],
    actionItems: [
      {
        id: 0,
        title: "Click for more info",
        link: "https://www.thesitewizard.com/html-tutorial/open-links-in-new-window-or-tab.shtml"
      },
      {
        id: 1,
        title: "DHS I-94 Portal",
        link: "https://i94.cbp.dhs.gov/I94/#/home"
      }
    ]
  },
  {
    id: 7,
    date: "2020-04-30",
    checked: false,
    title: "[ISP] CPT history",
    description: "ISP will print your CPT history (if applicable). The",
    notes: "",
    subTasks: [
      {
        id: 0,
        title: "Email ISP at isp@macalester.edu to ask them to print your CPT history if applicable",
        checked: false
      }
    ],
    actionItems: [
      {
        id: 0,
        title: "Click for more info",
        link: "https://www.macalester.edu/isp/governmentregulations/employmentpostmac/#opt"
      }
    ]
  },
  {
    id: 8,
    date: "2020-07-05",
    checked: false,
    title: "[ISP] I-20",
    description: "ISP will print a new I-20 for you to submit with your Form I-765.",
    notes: "Complete OPT application must be received by USCIS within 30 days of new I-20 issuance, failure to do so will result in application’s rejection",
    subTasks: [
      {
        id: 0,
        title: "Sign your I-20",
        checked: false
      },
      {
        id: 1,
        title:"Submit complete OPT application within 30 days of I-20 issuance"
      }
    ],
    actionItems: [
      {
        id: 0,
        title: "Click for more info",
        link: "https://www.macalester.edu/isp/governmentregulations/employmentpostmac/#opt"
      },
      {
        id: 1,
        title: "Check status of OPT application",
        link: "https://egov.uscis.gov/casestatus/landing.do"
      }
    ]
  }
];

export const END_DATE = "2020-08-01";
