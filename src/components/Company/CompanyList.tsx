import React, { useEffect, useState } from 'react'
import { Company } from './Company';
import * as companyService from './CompanyService';
import CompanyItem from './CompanyItem';

const CompanyList = () => {

    const [companies, setCompanies] = useState<Company[]>([]);

    const loadCompanies = async () => {
        const res = await companyService.getCompanies()
        setCompanies(res.data);
    }
    useEffect(() => {
        loadCompanies();
    }, [])

    return (
        <div>
            {companies.map((company) => {
                return <CompanyItem company={company} />
            })}
        </div>
    )
}

export default CompanyList
