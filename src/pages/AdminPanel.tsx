import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { PersonGearIcon } from "../components/Icons";
import TableComp from "../components/TableComp";
import { useState } from "react";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState<Type>("services");

  const tabHeaderData = [
    {
      label: "Servicios",
      value: "services",
      icon: <WrenchScrewdriverIcon className="size-5" />,
    },
    {
      label: "Usuarios administradores",
      value: "users",
      icon: <PersonGearIcon className="size-5" />,
    },
  ];
  return (
    <Tabs value="services" className="my-8">
      <TabsHeader className="bg-gray-900">
        {tabHeaderData.map(({ label, value, icon }) => (
          <Tab key={value} value={value} onClick={() => setActiveTab(value as Type)}>
            <div
              className={`flex items-center gap-2 ${
                activeTab === value ? "text-gray-900" : "text-gray-50"
              }`}
            >
              {icon}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        <TabPanel value={activeTab}>
          <TableComp type={activeTab} />
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
};

export default AdminPanel;
