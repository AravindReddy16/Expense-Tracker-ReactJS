import React from "react";

export const IncomeStatus = ({amount}) => {
    return (
        <div className="income">
            <p>Income: ${amount}</p>
        </div>
    )
};

export const ExpenseStatus = ({amount}) => {
    return (
        <div className="expense">
            <p>Expense: ${amount}</p>
        </div>
    )
};