import { Routes } from "@angular/router";

export const appRoutes : Routes= [
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
    },

    {
        path: "player",
        loadChildren: () => import("./pages/player/player.module").then(x => x.PlayerModule)
    }
];