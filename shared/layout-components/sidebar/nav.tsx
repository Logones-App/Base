import React from "react";
const icon1 = <i className="bx bx-home side-menu__icon"></i>
const icon2 = <i className="bx bx-file-blank side-menu__icon"></i>
const icon3 = <i className="bx bx-task side-menu__icon"></i>
const icon4 = <i className="bx bx-fingerprint side-menu__icon"></i>
const icon5 = <i className="bx bx-error side-menu__icon"></i>
const icon6 = <i className="bx bx-box side-menu__icon"></i>
const icon7 = <i className="bx bx-medal side-menu__icon"></i>
const icon8 = <i className="bx bx-file side-menu__icon"></i>
const icon9 = <i className="bx bx-party side-menu__icon"></i>
const icon10 = <i className="bx bx-gift side-menu__icon"></i>
const icon11 = <i className="bx bx-grid-alt side-menu__icon"></i>
const icon12 = <i className="bx bx-table side-menu__icon"></i>
const icon13 = <i className="bx bx-bar-chart-square side-menu__icon"></i>
const icon14 = <i className="bx bx-map side-menu__icon"></i>
const icon15 = <i className="bx bx-store-alt side-menu__icon"></i>
const icon16 = <i className="bx bx-layer side-menu__icon"></i>

//Badges
const badge1 = <span className="badge bg-secondary-transparent ms-2">New</span>
const badge2 = <span className="badge bg-warning-transparent ms-2">12</span>
const badge3 = <span className="badge bg-danger-transparent ms-2">Hot</span>
const badge4 = <span className="badge bg-success-transparent ms-2">3</span>
export const MENUITEMS:any = [
  {
    menutitle: "MAIN",
  },
      {
        title: "Dashboards", icon: icon1, badgetxt: badge2, type: "sub", active: false, selected: false,
        children: [
          { path: "/dashboards/crm", type: "link", active: false, selected: false, title: "CRM", },
         
        ],
      },
   
      {
        menutitle: "PAGES",
      },
  
  
  
      {
        title: "Error", icon: icon5, type: "sub", active: false, selected: false,
        children: [       
          { path: "/error/error-404", type: "link", active: false, selected: false, title: "404-Error" },
        
        ],
      },
    
    
  
];
export default MENUITEMS;
