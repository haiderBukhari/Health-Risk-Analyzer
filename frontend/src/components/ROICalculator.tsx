import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator, DollarSign, TrendingUp, Check, PiggyBank, BarChart3, Target } from "lucide-react";

export const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    monthlyInboundLeads: 0,
    conversionRate: 0,
    averageDealSize: 0,
    bdrSalary: 0,
    bdrManagerSalary: 0,
    toolsCosts: 0
  });

  const [selectedPackage, setSelectedPackage] = useState('scale');
  const [viewType, setViewType] = useState('monthly'); // monthly or annual

  const packages = {
    starter: {
      name: 'Starter',
      price: 6490,
      emails: 0,
      bdrs: 1,
      features: [
        '1 BDR (full-time)',
        'Part-time AI operator',
        'Enrichment tools',
        'Outreach tools',
        'Weekly iterations',
        'Basic reporting'
      ]
    },
    growth: {
      name: 'Growth',
      price: 9990,
      emails: 0,
      bdrs: 2,
      features: [
        '2 BDRs (full-time)',
        'Part-time AI operator',
        'Enrichment tools',
        'Outreach tools',
        'Bi-weekly iterations',
        'LinkedIn execution',
        'Advanced reporting'
      ]
    },
    scale: {
      name: 'Scale',
      price: 13490,
      emails: 0,
      bdrs: 3,
      features: [
        '3 BDRs (full-time)',
        'Part-time AI operator',
        'Enrichment tools',
        'Outreach tools',
        'Weekly iterations',
        'Account-based sequences',
        'Revenue dashboard',
        'Live call coaching'
      ]
    },
    enterprise: {
      name: 'Enterprise',
      price: 16990,
      emails: 0,
      bdrs: 4,
      features: [
        '4 BDRs (full-time)',
        'Part-time AI operator',
        'Enrichment tools',
        'Outreach tools',
        'Daily iterations',
        'Custom workflows',
        'Dedicated cell lead',
        'Custom integrations',
        'Priority support'
      ]
    }
  };

  const [results, setResults] = useState({
    currentRevenue: 0,
    internalCosts: 0,
    leadMamutCost: packages[selectedPackage].price,
    projectedLeads: 0,
    projectedRevenue: 0,
    netGain: 0,
    roi: 0,
    costSavings: 0,
    costSavingsPercent: 0,
    revenueGrowth: 0,
    revenueGrowthPercent: 0,
    currentCAC: 0,
    newCAC: 0,
    cacReduction: 0
  });

  const calculateROI = () => {
    const currentRevenue = inputs.monthlyInboundLeads * (inputs.conversionRate / 100) * inputs.averageDealSize;
    
    // Calculate internal costs based on selected package BDR count
    const selectedPkg = packages[selectedPackage];
    const internalBDRCosts = inputs.bdrSalary * selectedPkg.bdrs;
    const managerCosts = selectedPkg.bdrs >= 2 ? inputs.bdrManagerSalary : 0; // Only add manager cost for 2+ BDRs
    const internalCosts = internalBDRCosts + managerCosts + inputs.toolsCosts;
    
    // Projected leads based on package tier - conservative 1.3x to 1.6x current leads
    const leadMultipliers = {
      starter: 1.3,   // 30% increase
      growth: 1.4,    // 40% increase  
      scale: 1.5,     // 50% increase
      enterprise: 1.6 // 60% increase
    };
    
    const projectedLeads = inputs.monthlyInboundLeads * leadMultipliers[selectedPackage];
    const projectedRevenue = projectedLeads * (inputs.conversionRate / 100) * inputs.averageDealSize;
    
    const leadMamutCost = selectedPkg.price;
    const netGain = projectedRevenue - currentRevenue - leadMamutCost + internalCosts;
    const roi = internalCosts > 0 ? ((netGain / internalCosts) * 100) : 0;

    // Cost savings calculations
    const costSavings = internalCosts - leadMamutCost;
    const costSavingsPercent = internalCosts > 0 ? ((costSavings / internalCosts) * 100) : 0;

    // Revenue growth calculations
    const revenueGrowth = projectedRevenue - currentRevenue;
    const revenueGrowthPercent = currentRevenue > 0 ? ((revenueGrowth / currentRevenue) * 100) : 0;

    // CAC calculations
    const currentDeals = inputs.monthlyInboundLeads * (inputs.conversionRate / 100);
    const projectedDeals = projectedLeads * (inputs.conversionRate / 100);
    const currentCAC = currentDeals > 0 ? (internalCosts / currentDeals) : 0;
    const newCAC = projectedDeals > 0 ? (leadMamutCost / projectedDeals) : 0;
    const cacReduction = currentCAC > 0 ? (((currentCAC - newCAC) / currentCAC) * 100) : 0;

    setResults({
      currentRevenue,
      internalCosts,
      leadMamutCost,
      projectedLeads,
      projectedRevenue,
      netGain,
      roi,
      costSavings,
      costSavingsPercent,
      revenueGrowth,
      revenueGrowthPercent,
      currentCAC,
      newCAC,
      cacReduction
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const handlePackageChange = (packageType: string) => {
    setSelectedPackage(packageType);
    setResults(prev => ({
      ...prev,
      leadMamutCost: packages[packageType].price
    }));
  };

  return (
    <section id="roi-calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FF6B35] to-[#374151] bg-clip-text text-transparent">
            Outbound Sales System ROI Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-4">
            Calculate your potential <strong>return on investment</strong> with our complete outbound sales system installation vs. building an internal BDR team
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8">
            See how much you save with our <strong>BDR team installation</strong> compared to hiring, training, and managing in-house sales development representatives
          </p>
          
          {/* Package Selection - Simple dropdown */}
          <div className="max-w-md mx-auto mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Package for Comparison
            </label>
            <select 
              value={selectedPackage} 
              onChange={(e) => handlePackageChange(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white"
            >
              <option value="starter">Installation Starter - $6,490/mo</option>
              <option value="growth">Growth - $9,990/mo</option>
              <option value="scale">Scale - $13,490/mo</option>
              <option value="enterprise">Enterprise - $16,990/mo</option>
            </select>
            <p className="text-sm text-gray-500 mt-2">
              <a 
                href="#pricing" 
                className="text-[#FF6B35] hover:underline cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View detailed pricing above
              </a> to see what's included in each package
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-6 h-6 text-[#FF6B35]" />
                <h3 className="text-2xl font-bold text-[#374151]">Your Current Metrics</h3>
              </div>
              
              {/* View Toggle */}
              <div className="flex gap-2 mb-6 p-1 bg-gray-100 rounded-lg">
                <button
                  onClick={() => setViewType('monthly')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    viewType === 'monthly' 
                      ? 'bg-white text-[#FF6B35] shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly View
                </button>
                <button
                  onClick={() => setViewType('annual')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    viewType === 'annual' 
                      ? 'bg-white text-[#FF6B35] shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Annual View
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Monthly Leads (baseline)
                  </label>
                  <Input
                    type="number"
                    placeholder="30"
                    className="h-12"
                    onChange={(e) => handleInputChange('monthlyInboundLeads', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Conversion Rate (%)
                  </label>
                  <Input
                    type="number"
                    placeholder="15"
                    className="h-12"
                    onChange={(e) => handleInputChange('conversionRate', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average Deal Size ($)
                  </label>
                  <Input
                    type="number"
                    placeholder="5000"
                    className="h-12"
                    onChange={(e) => handleInputChange('averageDealSize', e.target.value)}
                  />
                </div>
                
                <h4 className="text-lg font-semibold text-[#374151] mt-6 mb-4">Internal Team Costs (Monthly)</h4>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    BDR Salary (per BDR) ($)
                  </label>
                  <Input
                    type="number"
                    placeholder="4500"
                    className="h-12"
                    onChange={(e) => handleInputChange('bdrSalary', e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Will be multiplied by {packages[selectedPackage].bdrs} BDR{packages[selectedPackage].bdrs > 1 ? 's' : ''} for comparison
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    BDR Manager Salary ($)
                  </label>
                  <Input
                    type="number"
                    placeholder="7000"
                    className="h-12"
                    onChange={(e) => handleInputChange('bdrManagerSalary', e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {packages[selectedPackage].bdrs >= 2 ? 'Included in comparison' : 'Not included (only 1 BDR)'}
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tools & Software Costs ($)
                  </label>
                  <Input
                    type="number"
                    placeholder="500"
                    className="h-12"
                    onChange={(e) => handleInputChange('toolsCosts', e.target.value)}
                  />
                </div>
                
                <Button 
                  onClick={calculateROI}
                  className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white h-12 mt-6"
                >
                  Calculate ROI
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {/* Key Benefits Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <PiggyBank className="w-6 h-6 text-green-600" />
                    <h4 className="text-lg font-bold text-green-800">Cost Savings</h4>
                  </div>
                  <div className="text-2xl font-bold text-green-700">
                    ${(viewType === 'monthly' ? results.costSavings : results.costSavings * 12).toLocaleString()}
                  </div>
                  <div className="text-sm text-green-600 mt-1">
                    {results.costSavingsPercent.toFixed(1)}% savings vs internal team
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                    <h4 className="text-lg font-bold text-blue-800">Revenue Growth</h4>
                  </div>
                  <div className="text-2xl font-bold text-blue-700">
                    ${(viewType === 'monthly' ? results.revenueGrowth : results.revenueGrowth * 12).toLocaleString()}
                  </div>
                  <div className="text-sm text-blue-600 mt-1">
                    {results.revenueGrowthPercent.toFixed(1)}% increase in revenue
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CAC Improvement Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-purple-600" />
                  <h4 className="text-lg font-bold text-purple-800">Customer Acquisition Cost (CAC) Improvement</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-600">${results.currentCAC.toFixed(0)}</div>
                    <div className="text-sm text-gray-600">Current CAC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">${results.newCAC.toFixed(0)}</div>
                    <div className="text-sm text-gray-600">New CAC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{results.cacReduction.toFixed(1)}%</div>
                    <div className="text-sm text-gray-600">CAC Reduction</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Analysis */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-6 h-6 text-[#FF6B35]" />
                  <h3 className="text-2xl font-bold text-[#374151]">
                    Detailed {viewType === 'monthly' ? 'Monthly' : 'Annual'} Analysis
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Current {viewType === 'monthly' ? 'Monthly' : 'Annual'} Revenue</span>
                    <span className="font-bold text-green-600">
                      ${(viewType === 'monthly' ? results.currentRevenue : results.currentRevenue * 12).toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex justify-between p-4 bg-red-50 rounded-lg">
                    <span className="font-medium">Internal Team Costs ({packages[selectedPackage].bdrs} BDR{packages[selectedPackage].bdrs > 1 ? 's' : ''}{packages[selectedPackage].bdrs >= 2 ? ' + Manager' : ''})</span>
                    <span className="font-bold text-red-600">
                      ${(viewType === 'monthly' ? results.internalCosts : results.internalCosts * 12).toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex justify-between p-4 bg-orange-50 rounded-lg">
                    <span className="font-medium">LeadMamut Cost ({packages[selectedPackage].name})</span>
                    <span className="font-bold text-[#FF6B35]">
                      ${(viewType === 'monthly' ? results.leadMamutCost : results.leadMamutCost * 12).toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex justify-between p-4 bg-blue-50 rounded-lg">
                    <span className="font-medium">Projected {viewType === 'monthly' ? 'Monthly' : 'Annual'} Leads</span>
                    <span className="font-bold text-blue-600">
                      {(viewType === 'monthly' ? results.projectedLeads : results.projectedLeads * 12).toFixed(0)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between p-4 bg-green-50 rounded-lg">
                    <span className="font-medium">Projected {viewType === 'monthly' ? 'Monthly' : 'Annual'} Revenue</span>
                    <span className="font-bold text-green-600">
                      ${(viewType === 'monthly' ? results.projectedRevenue : results.projectedRevenue * 12).toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="border-t-2 border-gray-200 pt-4">
                    <div className="flex justify-between p-4 bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white rounded-lg">
                      <span className="font-bold">{viewType === 'monthly' ? 'Monthly' : 'Annual'} Net Gain</span>
                      <span className="font-bold">
                        ${(viewType === 'monthly' ? results.netGain : results.netGain * 12).toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="flex justify-between p-4 bg-green-100 rounded-lg mt-2">
                      <span className="font-bold">ROI Percentage</span>
                      <span className="font-bold text-green-700">{results.roi.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4">Lower Costs + More Revenue = Better Unit Economics</h4>
                <div className="bg-white/10 p-4 rounded-lg mb-4">
                  <p className="text-orange-100 text-sm leading-relaxed">
                    Our outbound system installation doesn't just save you money—it fundamentally improves your business unit economics by 
                    <strong className="text-white"> lowering customer acquisition costs while increasing lead volume and revenue</strong>. 
                    This creates a compounding effect that scales your growth without breaking your budget.
                  </p>
                </div>
                <ul className="space-y-2 text-orange-100 text-sm">
                  <li>• Complete plug & play outbound system in 7 days</li>
                  <li>• Save 50-70% vs building in-house BDR team</li>
                  <li>• 30-60% more leads with proven GTM framework</li>
                  <li>• Zero overhead, hiring, or management complexity</li>
                  <li>• Dedicated team works exclusively for your company</li>
                  <li>• Full transparency and control unlike agencies</li>
                  <li>• AI-powered optimization and performance tracking</li>
                </ul>
                <Button 
                  variant="secondary" 
                  className="bg-white text-[#FF6B35] hover:bg-gray-100 mt-6 w-full"
                  onClick={() => window.open('https://calendly.com/bruno-leadmamut/30min', '_blank')}
                >
                  Book Discovery Call - See Your ROI
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
