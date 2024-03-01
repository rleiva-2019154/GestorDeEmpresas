'use strict'

import { Router } from "express"
import { 
    testCompany,
    saveCompany,
    updateCompany,
    listCompanies,
    filterCompaniesByYears,
    filterCompaniesByCategory,
    sortCompaniesAZ,
    sortCompaniesZA,
    generateExcelReport
} from "./company.controller.js"

const api = Router()

api.get('/testCompany', testCompany)
api.post('/saveCompany', saveCompany)
api.put('/updateCompany/:id', updateCompany)
api.get('/listCompanies', listCompanies)
api.get('/filterCompaniesByYears', filterCompaniesByYears)
api.get('/filterCompaniesByCategory', filterCompaniesByCategory)
api.get('/sortCompaniesAZ', sortCompaniesAZ)
api.get('/sortCompaniesZA', sortCompaniesZA)
api.get('/generateExcelReport', generateExcelReport)


export default api