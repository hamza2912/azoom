import React, { Component } from "react";
import MultilevelSidebar from "react-multilevel-sidebar";
import "react-multilevel-sidebar/src/Sidebar.css";

let options = [
  {
    title: "Education",
    titleIcon: <i className="fa fa-graduation-cap"></i>,
    content: [{ id: 1, name: "My courses", to: "/my-courses" }],
  },
  {
    title: "Most popular",
    titleIcon: <i className="fa fa-paragraph"></i>,
    hideBorder: true,
    content: [
      {
        id: 2,
        name: "Web Development",
        icon: <i className="fa fa-chrome"></i>,
        children: [
          {
            title: "JavaScript",
            titleIcon: <i className="fa fa-opera"></i>,
            content: [
              {
                id: 3,
                name: "functions",
                "Some property i need on clicking this": "value",
              },
            ],
          },
        ],
      },
    ],
  },
];

class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  handleSidebarToggle = (isOpen) => {
    this.setState({ isOpen });
  };

  handleClick = (itemOptions) => {
    /* 
        do something with the item you clicked.
        you can also send custom properties of your choice
        in the options array you'll be getting those here
        whenever you click that item
    */
  };

  render() {
    return (
      <div>
        <MultilevelSidebar
          open={this.state.isOpen}
          onToggle={this.handleSidebarToggle}
          options={options}
          header="Products"
          onItemClick={this.handleClick}
        />
        {/* using in our button to open the sidebar */}
        <button onClick={() => this.handleSidebarToggle(true)}>open</button>
      </div>
    );
  }
}

export default MyComponent;
