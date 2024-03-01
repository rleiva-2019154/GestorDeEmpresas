'use strict'

import { Router } from "express"
import { isAdmin, validateJwt } from '../middlewares/validate-jwt.js'
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

api.get('/testCompany', [validateJwt, isAdmin], testCompany)
api.post('/saveCompany', [validateJwt, isAdmin], saveCompany)
api.put('/updateCompany/:id', updateCompany)
api.get('/listCompanies', [validateJwt, isAdmin], listCompanies)
api.get('/filterCompaniesByYears', [validateJwt, isAdmin], filterCompaniesByYears)
api.get('/filterCompaniesByCategory', [validateJwt, isAdmin], filterCompaniesByCategory)
api.get('/sortCompaniesAZ', [validateJwt, isAdmin], sortCompaniesAZ)
api.get('/sortCompaniesZA', [validateJwt, isAdmin], sortCompaniesZA)
api.get('/generateExcelReport', [validateJwt, isAdmin], generateExcelReport)


export default api