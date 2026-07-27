import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const isGitHubPages =
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/venkateshwaradentalclinic");

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    basepath: isGitHubPages ? "/venkateshwaradentalclinic" : "/",
  });

  return router;
};
