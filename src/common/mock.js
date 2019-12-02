export const MOCK_TASKS = [
  {
    id: 0,
    date: "10/10/10",
    checked: false,
    title: "Some Title #1",
    description: "Some description #1",
    notes: "",
    subTasks: [
      {
        id: 0,
        title: "Subtask #1",
        checked: false
      },
      {
        id: 1,
        title: "Subtask #2",
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
        title: "Example pictures",
        link: "https://www.thesitewizard.com/html-tutorial/open-links-in-new-window-or-tab.shtml"
      }
    ]
  },
  {
    id: 1,
    date: "12/10/10",
    checked: false,
    title: "Some Title #2",
    description: "Some description #2",
    notes: "",
    subTasks: [
      {
        id: 0,
        title: "Subtask #1",
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
        title: "Download form",
        link: "https://www.thesitewizard.com/html-tutorial/open-links-in-new-window-or-tab.shtml"
      }
    ]
  }
];