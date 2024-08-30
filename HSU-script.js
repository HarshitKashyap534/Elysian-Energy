document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('costForm');
    const resultsSection = document.getElementById('results');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get input values
        const cost1 = parseFloat(document.getElementById('cost1').value);
        const cost2 = parseFloat(document.getElementById('cost2').value);
        const cost3 = parseFloat(document.getElementById('cost3').value);

        // Perform calculations (these are placeholder calculations)
        const totalCost = cost1 + cost2 + cost3;
        const levelizedCost = totalCost / 200000; // Assuming 200,000 kg production
        const paybackPeriod = totalCost / 200000;
        const internalRate = (totalCost / 1000000) * 100;

        // Update results
        document.getElementById('totalCost').textContent = `$${totalCost.toLocaleString()}`;
        document.getElementById('levelizedCost').textContent = `$${levelizedCost.toFixed(2)}`;
        document.getElementById('paybackPeriod').textContent = paybackPeriod.toFixed(1);
        document.getElementById('internalRate').textContent = `${internalRate.toFixed(1)}%`;

        // Show results section
        resultsSection.style.display = 'block';
    });
});