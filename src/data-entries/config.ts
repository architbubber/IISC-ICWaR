/*******************************************************************************************************************************/
//                                                  !!! ATTENTION !!!                                                          //
//                                                                                                                             //
//             /\                    THIS IS A HIGHLY VOLATILE FILE. ONLY AUTHORISED                           /\              //
//            /  \                   PERSONNEL FAMILIAR WITH WORKING OF THE SITE SHOULD                       /  \             //
//           /    \                  MAKE ANY CHANGES TO THIS FILE.                                          /    \            //
//          /  |   \                                                                                        /  |   \           //
//         /   |    \                                                                                      /   |    \          //
//        /    |     \               ANY CHANGES TO THIS FILE WILL DIRECTLY AFFECT THE WEBSITE            /    |     \         //
//       /            \              AND MAY RESULT IN CRASH OR OTHER POSSIBLE SCENARIOS.                /            \        //
//      /      *       \                                                                                /      *       \       //
//     /_ _ _ _ _ _ _ __\                                                                              /_ _ _ _ _ _ _ __\      //
//                                                !! HANDLE WITH CARE !!                                                       //
//                                                                                                                             //
/*******************************************************************************************************************************/
export const configurations = {

  "global-settings":{
    "font-family":'Sabon-next-lt',
    "font-size":'1.5rem'
  },

  "spreeMailUrl":"https://formspree.io/f/xzblzjgk",

  "colorPallete":[
    '#8D8741',
    '#659DBD',
    '#DAAD86',
    '#BC986A',
    '#FBEEC1'
  ],

  "navbar":{
    "navLinksStyle":{
      'text-shadow':'1px 0px black',
      'color':'white',
      'background-color': '#0b8dd9b9',//#b7d8f3e8
  },
    'style':{
      'background-color': '#ffffff',//Color behind IISC And ICWaR Logo
      // 'border':'solid 5px black',
      // 'position':'fixed',
      // 'top':'0',
      // 'z-index':'100',
      // 'box-shadow':'1px 2px 10px black',
      // 'min-height': '10vh',
      'font-size':'25px'
    },
    "navMenu":[
      {
        "name":"Home",
        "link":"/"
      },
      {
        "name":"People",
        "hasDropdown":true,
        "dropdownStyle":{
          'color':'#fefefe',
          'background-color': '#a23838f9',//#8d4736ff
          'font-size':'25px'
        },
        "dropdownItems":[
          {
            "name":"Faculty",
            "link":"/people/faculty",
            "hasSubDropdown":false
          },
          {
            "name":"Visitors",
            "link":"/people/visitors"
          },
          {
            "name":"Research Students",
            "link":"/people/researchStudents"
          },
          {
            "name":"Post Doctoral Scholars",
            "link":"/people/postDoctoralScholars"
          },
          {
            "name":"Project Staff",
            "link":"/people/projectStaff"
          },
          {
            "name":"Office Staff",
            "link":"/people/officeStaff"
          },
        ],
      },
      {
        "name":"Research",
        "link":"/research"
      },
      {
        "name":"Publications",
        "link":"/publications"
      },
      {
        "name":"Activities & Events",
        "hasDropdown":true,
        "dropdownStyle":{
          'color':'white',
          'background-color': '#a23838f9',
          'border-top':'none',
          'font-size':'25px'
        },
        "dropdownItems":[
          {
            "name":"Workshops And Short Courses",
            "link":"/events/workshop-and-meetings",
            "hasSubDropdown":true,
            "dropdownStyle":{
              'color':'white',
              'background-color': '#a23838f9',
              'border-top':'none',
              'font-size':'25px'
            },
            "subDropdownItems":[
              {
                "name":"Seminars",
                "link":"/events/seminars-and-publications"
              },
              {
                "name":"Meetings",
                "link":"/events/workshop-and-meetings"
              },
              {
                "name":"Outreach",
                "link":"/event"
              }]
          },
          {
            "name":"Monsoon School",
            "link":"/events/monsoon-school"
          },
          {
            "name":"Student Seminar Series",
            "link":"/students-corner"
          },
          {
            'name':'Gallery',
            'link':'/gallery',
            "hasSubDropdown":true,
            "subDropdownItems":[
            {
              "name":"Fresher’s Day 2022 – Gallery",
              "link":"none"
            },
            {
              "name":"Open Day: ICWaR",
              "link":"none"
            },
            {
              "name":"Open Day, 2020",
              "link":"none"
            },
            {
              "name":"Open Day, 2019",
              "link":"none"
            }],
          },
          {
            "name":"Outreach",
            "link":"none"
          },
        ],
      },
      {
        "name":"About",
        "hasDropdown":true,
        "dropdownStyle":{
          'color':'white',
          'background-color': '#a23838f9',
          'border-top':'none',
          'font-size':'25px'
        },
        "dropdownItems":[
          {
            "name":"History",
            "link":"/about-us"
          },
          {
            "name":"Program",
            "link":"/program"
          },
          {
            "name":"Infrastructure",
            "link":"/centres-and-facilities"
          },
          {
            'name':'Admissions',
            'link':'/redirect_initiated',
            'redirect':'https://iisc.ac.in/admissions/'
          },{
            'name':"Contact Us",
            'link':'/contact-us'
          }
        ],
      },
      {
        "name":"Students Corner",
        "hasDropdown":true,
        "dropdownStyle":{
          'color':'white',
          'background-color': '#a23838f9',
          'border-top':'none',
          'font-size':'25px'
        },
        "dropdownItems":[
          {
            "name":"Blogs",
            "link":"/students-blogs"
          },
          {
            "name":"Testimonials",
            "link":"/null"
          }
        ],
      }
    ]
  },
  //Page specific Settings
  "publications":{
    "font-size":"",
  },

  "footer":{
    "style":{
      //  "background-color": "#0e0e0e",
       "background-color": "#08394f",
       "color":"red"
    }
  }
}
