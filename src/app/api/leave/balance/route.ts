import dbConnect from "@/app/lib/dbConnect";
import LeaveBalanceModel from "@/models/LeaveBalance.model";
import LeaveApplicationModel from "@/models/LeaveApplication.model";
import { NextResponse,NextRequest } from "next/server";
import LeaveTypesModel from "@/models/LeaveType.model";
dbConnect();

export async function POST(req:NextRequest){
    try {
        const searchParams =  req.nextUrl.searchParams;
        const id = searchParams.get("id");

        const leaveApplication = await LeaveApplicationModel.find({employeeId:id,status:"APPROVED"});

        
        //leave types 
        const LeaveTypes = await LeaveTypesModel.find({});

        const reqBody = await req.json();
        const {} = reqBody;
        const leaveBalance = await LeaveBalanceModel.create({})
    } catch (error:any) {
       return NextResponse.json({
        success:false,
        message:`something went error : ${error.message}`
       }) 
    }
}