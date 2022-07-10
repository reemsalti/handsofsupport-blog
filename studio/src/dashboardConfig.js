export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62cb34782236f177f45578ef",
                  title: "Sanity Studio",
                  name: "handsofsupport-blog-studio",
                  apiId: "aac558f8-c870-4599-8bed-656d80044982",
                },
                {
                  buildHookId: "62cb347827fb417686fb7ca1",
                  title: "Blog Website",
                  name: "handsofsupport-blog",
                  apiId: "bf887742-50cc-4c68-9ccd-211da712c74f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/reemsalti/handsofsupport-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://handsofsupport-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
