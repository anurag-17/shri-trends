import DealerDashboard from "@/components/dealer-dashboard/dashboard/dashboard-pages/DealerDashboard";
import ProductList from "@/components/dealer-dashboard/dashboard/dashboard-pages/products/ProductList";
import Reviews from "@/components/dealer-dashboard/dashboard/dashboard-pages/reviews/Reviews";
import Orders from "@/components/dealer-dashboard/dashboard/dashboard-pages/total-orders/Orders";

export const sideMenus = [
    {
      id: 1,
      label: "Dashboard",
      component: <DealerDashboard />,
    //   icon: HomeIcon,
    },
    {
      id: 2,
      label: "Products",
      component: <ProductList />,
    //   icon: Users,
    },
    {
      id: 3,
      label: "Total orders",
      component: <Orders />,
    //   icon: Users,
    },
    {
      id: 4,
      label: "Reviews",
      component: <Reviews />,
    //   icon: Users,
    },
    {
      id: 5,
      label: "Settings",
    //   component: <AppForm />,
    //   icon: webIcon,
    },
    {
      id: 6,
      label: "Wallet",
    //   component:<Vendor/> ,
    //   icon: Users,
    }
  ];
