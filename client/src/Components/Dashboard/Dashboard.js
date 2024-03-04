import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import History from "../../History/History";
import { InnerLayout } from "../../styles/Layouts";
import { rupee } from "../../utils/Icons";
import Chart from "../Chart/Chart";
function Dashboard() {
  const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext();
  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <StyledDashboard>
      <InnerLayout>
        <h2>Transactions Tracking</h2> <br />
        <div className="stats-container">
          <div className="chart-container">
            <div className="finance-item income">
              <h2>Total Income: <span style={{ color: '#008000' }}>{rupee} {totalIncome()}</span></h2>
            </div>

            <div className="finance-item expense">
              <h2>Total Expense: <span style={{ color: '#ff0000' }}>{rupee} {totalExpenses()}</span></h2>
            </div>

            <div className="finance-item balance">
              <h2>Total Balance: <span style={{ color: '#000000' }}>{rupee} {totalBalance()}</span></h2>
            </div>
          </div>

          <div className="history-container">
            <h3>Transaction History</h3> <br />
            <History />
          </div>
        </div>
      </InnerLayout>
    </StyledDashboard>
  );
}

const StyledDashboard = styled.div`
    .stats-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
  
      @media (min-width: 768px) {
        grid-template-columns: 2fr 1fr;
      }
  
      .chart-container {
        height: 100%;
        position: relative;
        background: #fff;
        border-radius: 5%;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  
       
          .finance-item {
            display:flex;
            flex-direction: column;
            text-align: center;
            padding: 1.5rem;
            background: #fcf6f9;
            border: 2px solid #ffffff;
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            border-radius: 20px;
            width:100%
  
            h2 {
              display: flex;
              align-item: center;
              font-size: 1.5rem;
              margin-bottom: 0.5rem;
              color: #000000;
            }
            
            h2 span {
              margin-left: 0.5rem;
            }
          }
      
      }
  
      .history-container {
        h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: rgba(34, 34, 96, 1);
        }
  
        .salary-item {
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          padding: 1rem;
          border-radius: 20px;
          margin-bottom: 1rem;
  
          p {
            font-weight: 600;
            font-size: 1.6rem;
            color: #333;
          }
        }
      }
    }
  `;

export default Dashboard;
