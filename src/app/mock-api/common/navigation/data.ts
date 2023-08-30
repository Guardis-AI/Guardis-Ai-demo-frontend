/* tslint:disable:max-line-length */
/* tslint:disable:max-line-length */
import { FuseNavigationItem } from "@fuse/components/navigation";

export const defaultNavigation: FuseNavigationItem[] = [];
export const compactNavigation: FuseNavigationItem[] = [
  {
    id: "Setup",
    title: "Setup",
    // tooltip : 'Setup',
    type: "aside",
    icon: "heroicons_outline:cog",
    children: [
      {
        id: "user",
        title: "User",
        type: "basic",
        icon: "heroicons_outline:user",
        link: "user",
      },
    ],
  },
  {
    id: "Live",
    title: "Live",
    type: "basic",
    icon: "heroicons_outline:video-camera",
    link: "/live",
  },
  {
    id: "Playback",
    title: "Playback",
    type: "basic",
    icon: "heroicons_outline:play",
    link: "/playback",
  },
  {
    id: "notifications",
    title: "Notification",
    // tooltip : 'Notification',
    type: "basic",
    icon: "heroicons_outline:bell",
    link: "/viewnotifications",
  },
];
export const futuristicNavigation: FuseNavigationItem[] = [];
export const horizontalNavigation: FuseNavigationItem[] = [
  {
    id: "Setup",
    title: "Setup",
    type: "collapsable",
    link: "/setup",
    icon: "heroicons_outline:cog",
    children: [
      {
        id: "user",
        title: "User",
        type: "basic",
        icon: "heroicons_outline:user",
        link: "user",
      },
    ],
  },
  {
    id: "Playback",
    title: "Playback",
    type: "basic",
    icon: "heroicons_outline:play",
    link: "/playback",
  },
  {
    id: "Live",
    title: "Live",
    type: "basic",
    icon: "heroicons_outline:video-camera",
    link: "/live",
  },
  {
    id: "Notification",
    title: "Notification",
    type: "basic",
    icon: "heroicons_outline:bell",
    link: "/viewnotifications",
  },
  // {
  //     id   : 'Setting',
  //     title: 'Setting',
  //     type : 'basic',
  //     icon : 'heroicons_outline:cog',
  //     link : '/setting'
  // }
];
