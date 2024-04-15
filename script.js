// script.js
function calculateProfit() {
    const baseFee = parseInt(document.getElementById('allocatedBudget').value);
    const moderators = parseInt(document.getElementById('moderators').value);
    const modCostPerMod = parseInt(document.getElementById('modCostLevel').value);
    const cmCost = parseInt(document.getElementById('cmCostLevel').value);
    const contentPackage = parseInt(document.getElementById('content').value);

    const modCostTotal = modCostPerMod * moderators;
    const totalDirectCost = modCostTotal + cmCost; // CM is unique to each server

    const totalRevenue = baseFee + contentPackage; // Revenue includes content package value
    const agencyFee = totalDirectCost * 0.20; // 20% management fee on direct costs
    const finalTotalCost = totalDirectCost + agencyFee;

    const profit = totalRevenue - finalTotalCost;
    const margin = (profit / totalRevenue) * 100; // Profit margin percentage

    document.getElementById('initialCost').textContent = `$${totalDirectCost.toFixed(2)}`;
    document.getElementById('agencyFee').textContent = `$${agencyFee.toFixed(2)}`;
    document.getElementById('finalCost').textContent = `$${finalTotalCost.toFixed(2)}`;
    document.getElementById('totalRevenue').textContent = `$${totalRevenue.toFixed(2)}`;
    document.getElementById('profit').textContent = `$${profit.toFixed(2)}`;
    document.getElementById('margin').textContent = `${margin.toFixed(2)}%`;
}
