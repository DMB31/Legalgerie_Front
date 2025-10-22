type ServicesProps = {
  services: Array<{
    id: string,
    titre: string;
    description?: string;
  }>;
};

const ServicesList = ({ services }: ServicesProps) => {

  return (
    <div className="flex flex-col gap-[29px]">
      {services.map((service) => {
        return (
          <div key={service.id} className="flex gap-4">
            <div className="w-[3px] bg-[#C39A5C] flex-shrink-0 self-stretch"></div>
            <div>
              <h3 className="text-xl font-semibold leading-[26px] mb-2">
                {service.titre}
              </h3>
              <p className="text-base font-normal leading-[130%]">
                {service.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesList;
