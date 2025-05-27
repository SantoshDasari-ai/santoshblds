export interface RouteConfig {
  path: string;
  label: string;
  component: React.LazyExoticComponent<React.ComponentType>;
  showInNav?: boolean;
}

export interface ProjectRouteConfig extends RouteConfig {
  category?: "robotics" | "medical" | "cad" | "ai";
  status?: "completed" | "in-progress" | "planned";
}

export interface NavItem {
  path: string;
  label: string;
  external?: boolean;
  icon?: React.ComponentType;
}
