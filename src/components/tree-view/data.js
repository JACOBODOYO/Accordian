export const menus = [
    {
        label: "Home",
        to: "/",
    },
    {
        label: "Profile",
        to: "/profile",
        children: [
            {
                label: "Details",
                to: "details",
                children: [
                    {
                        label: "Location",
                        to: "location",
                        children: [
                            {
                                label: "city",
                                to: "city",
                            },
                        ]
                    },
                ],
            },
        ],
    },
    {
        label: "settings",
        to: "/settings",
        children: [
            {
                label: "Account",
                to: "account",
            },
            {
                label:"Security",
                to: "security",
                children: [
                    {
                        label: "Login",
                        to: "login",

                    },
                    {
                        label: "register",
                        to: "register",
                        children: [
                            {
                                label: "Random data",
                                to: "data"
                            }
                        ]
                    },
                ],
            },
        ],
    },
    {
        label: "Departments",
        to: "departments",
        children: [
            {
                label: "Admin",
                to: "admin"
            }

        ]
    }
];

export default menus;