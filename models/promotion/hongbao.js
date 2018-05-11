'use strict'

import mongoose from 'mongoose'
import hongbaoData from '../../InitData/hongbao'

const Schema = mongoose.Schema

const hongbaoSchema = new Schema({
    id: Number,
    sn: String,
    user_id: Number,
    amount: Number,
    sum_condition: Number,
    name: String,
    phone: String,
    begin_date: String,
    end_date: String,
    description_map: {
        phone: String,
        online_paid_only: String,
        validity_delta: String,
        validate_periods: String,
        sum_condition: String
    },
    limit_map: {},
    status: Number,
    present_status: Number,
    share_status: Number
})

hongbaoSchema.index({id: 1})

const hongbao = mongoose.model('Hongbao', hongbaoSchema);

hongbao.findOne((err, data) => {
    if(!data) {
        hongbaoData.forEach(item => {
            hongbao.create(item)
        })
    }
})

export default hongbao