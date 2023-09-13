report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Main_Page_0_document_0_phone.png",
        "test": "..\\bitmaps_test\\20230914-012420\\backstop_default_Main_Page_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Main_Page_0_document_0_phone.png",
        "label": "Main Page",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3001/todo_react_app",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.306640625,
          "misMatchPercentage": "0.31",
          "analysisTime": 21
        },
        "diffImage": "..\\bitmaps_test\\20230914-012420\\failed_diff_backstop_default_Main_Page_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Main_Page_0_document_1_tablet.png",
        "test": "..\\bitmaps_test\\20230914-012420\\backstop_default_Main_Page_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Main_Page_0_document_1_tablet.png",
        "label": "Main Page",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3001/todo_react_app",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.0598907470703125,
          "misMatchPercentage": "0.06",
          "analysisTime": 44
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Opened_modal_0_document_0_phone.png",
        "test": "..\\bitmaps_test\\20230914-012420\\backstop_default_Opened_modal_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Opened_modal_0_document_0_phone.png",
        "label": "Opened modal",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3001/todo_react_app",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "error": "Reference file not found C:\\Users\\kmusial\\visual-tests-workshops\\visual-tests-backstopjs\\backstop_data\\bitmaps_reference\\backstop_default_Opened_modal_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Opened_modal_0_document_1_tablet.png",
        "test": "..\\bitmaps_test\\20230914-012420\\backstop_default_Opened_modal_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Opened_modal_0_document_1_tablet.png",
        "label": "Opened modal",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3001/todo_react_app",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "error": "Reference file not found C:\\Users\\kmusial\\visual-tests-workshops\\visual-tests-backstopjs\\backstop_data\\bitmaps_reference\\backstop_default_Opened_modal_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});