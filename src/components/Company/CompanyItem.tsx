import React from 'react'
import { Company } from './Company'

interface Props {
    company: Company
}

const CompanyItem = ({company}: Props) => {
    return (
        <div>
            <h1>{company.denomination}</h1>
            <p>Dirección: {company.address}</p>
        </div>
    )
}

export default CompanyItem
