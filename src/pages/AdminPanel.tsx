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

const AdminPanel = () => {
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
          <Tab key={value} value={value} className="text-gray-600">
            <div className="flex items-center gap-2">
              {icon}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        <TabPanel value={"services"}>
          <TableComp/>
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
};

export default AdminPanel;
