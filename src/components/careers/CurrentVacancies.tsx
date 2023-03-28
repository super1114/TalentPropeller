import { useEffect, useState, useMemo } from 'react';

import { Dropdown } from '@nextui-org/React';

import CityMenu from '@/config/citymenu.config';
import { Jobs } from '@/database/vacancies.json';

import JobView from './JobView';

const CurrentVacancies = () => {
  const [jobs, setJobs] = useState<Array<TJobType>>([]);
  const [selectedCity, setSelectedCity] = useState<any>(
    new Set(['All Locations'])
  );
  const locationFilter = useMemo<any>(
    () => Array.from(selectedCity)[0],
    [selectedCity]
  );

  // console.log(locationFilter);

  const filterJobs = useMemo(() => {
    if (!jobs) return [];
    if (!locationFilter || locationFilter === 'All Locations') return jobs;
    return jobs.filter(({ location }) => location === locationFilter);
  }, [jobs, locationFilter]);

  useEffect(() => {
    // fetch the jobs
    setJobs(Jobs);
  }, []);

  return (
    <div className="items-center py-12 px-24">
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl">Current Vacancies</h1>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Button flat color="primary" css={{ tt: 'capitalize' }}>
              {locationFilter}
            </Dropdown.Button>
            <Dropdown.Menu
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedCity}
              onSelectionChange={setSelectedCity}
            >
              {CityMenu.map(({ key, name }) => (
                <Dropdown.Item key={key}>{name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      {filterJobs.map((job) => (
        <JobView job={job} key={job.id} />
      ))}
    </div>
  );
};

export default CurrentVacancies;
