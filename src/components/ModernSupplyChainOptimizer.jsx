import React, { useState, useEffect, useMemo } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, AreaChart, Area } from 'recharts';
import { 
  AlertTriangle, TrendingUp, TrendingDown, Clock, DollarSign, Package, Users, ChevronRight, Bell, Filter, Download, RefreshCw, Search, Eye, Settings, Shield, Calendar, MapPin, Star, Award, Activity, 
  Home, BarChart3, UserCheck, AlertCircle, FileText, Menu, X, Layers, Zap, Target, Globe, Brain, ArrowUpRight, ArrowDownRight, Plus, MoreHorizontal, ChevronDown, Sparkles, Gauge
} from 'lucide-react';

const ModernSupplyChainOptimizer = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [supplierData, setSupplierData] = useState([]);
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alerts, setAlerts] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    dateRange: '30d',
    riskLevel: 'all',
    region: 'all',
    category: 'all'
  });

  // Navigation items with modern icons and descriptions
  const navigationItems = [
    { 
      id: 'overview', 
      label: 'Overview', 
      icon: Home, 
      description: 'Executive dashboard & KPIs',
      color: 'from-blue-500 to-cyan-400'
    },
    { 
      id: 'suppliers', 
      label: 'Suppliers', 
      icon: Users, 
      description: 'Supplier directory & management',
      color: 'from-purple-500 to-pink-400'
    },
    { 
      id: 'analytics', 
      label: 'Analytics', 
      icon: BarChart3, 
      description: 'Performance insights & AI predictions',
      color: 'from-emerald-500 to-teal-400'
    },
    { 
      id: 'risks', 
      label: 'Risk Center', 
      icon: Shield, 
      description: 'Risk assessment & mitigation',
      color: 'from-orange-500 to-red-400'
    },
    { 
      id: 'automation', 
      label: 'Automation', 
      icon: Zap, 
      description: 'Workflows & AI recommendations',
      color: 'from-indigo-500 to-purple-400'
    },
    { 
      id: 'reports', 
      label: 'Insights', 
      icon: FileText, 
      description: 'Reports & business intelligence',
      color: 'from-amber-500 to-orange-400'
    }
  ];

  // Fetch live Odoo data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Simulate enhanced data with AI insights
        const enhancedSuppliers = generateEnhancedSupplierData();
        const processedOrders = generateOrderData();
        
        setSupplierData(enhancedSuppliers);
        setPurchaseOrders(processedOrders);
        
        generateSupplierAlerts(enhancedSuppliers, processedOrders);
        
      } catch (error) {
        console.error('Error fetching data:', error);
        loadMockData();
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const generateEnhancedSupplierData = () => {
    const suppliers = [
      { id: 1, name: 'Mouser Electronics', country: 'United States', category: 'Electronics' },
      { id: 2, name: 'Carr Manufacturing', country: 'United States', category: 'Manufacturing' },
      { id: 3, name: 'ESAM Inc.', country: 'United States', category: 'Engineering' },
      { id: 4, name: 'Arrow Electronics', country: 'United States', category: 'Electronics' },
      { id: 5, name: 'Gorilla Circuits', country: 'United States', category: 'PCB Manufacturing' },
      { id: 6, name: 'Green Circuits', country: 'China', category: 'PCB Manufacturing' },
      { id: 7, name: 'Alibaba', country: 'China', category: 'General Trading' },
      { id: 8, name: 'AG Products', country: 'United States', category: 'Industrial' },
      { id: 9, name: 'Romney Motion', country: 'United States', category: 'Motion Control' },
      { id: 10, name: 'Forecast 3D', country: 'United States', category: '3D Printing' }
    ];

    return suppliers.map(supplier => {
      const totalSpent = Math.floor(Math.random() * 500000) + 50000;
      const orderCount = Math.floor(Math.random() * 50) + 5;
      const avgOrderValue = totalSpent / orderCount;
      
      const onTimeDelivery = Math.floor(Math.random() * 40) + 60;
      const qualityScore = Math.floor(Math.random() * 30) + 70;
      const costEfficiency = Math.floor(Math.random() * 20) + 80;
      const sustainabilityScore = Math.floor(Math.random() * 40) + 60;
      
      const riskScore = Math.floor(Math.random() * 80) + 10;
      const riskLevel = riskScore > 70 ? 'High' : riskScore > 40 ? 'Medium' : 'Low';
      
      return {
        ...supplier,
        totalSpent,
        avgOrderValue: Math.round(avgOrderValue),
        orderCount,
        onTimeDelivery,
        qualityScore,
        costEfficiency,
        sustainabilityScore,
        riskScore,
        riskLevel,
        trend: Math.random() > 0.5 ? 'up' : 'down',
        trendValue: Math.floor(Math.random() * 20) + 1,
        lastOrder: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
        certifications: ['ISO 9001', 'ISO 14001', 'OHSAS 18001'].slice(0, Math.floor(Math.random() * 3) + 1),
        aiScore: Math.floor(Math.random() * 30) + 70,
        predictedGrowth: Math.floor(Math.random() * 40) - 20,
        innovationIndex: Math.floor(Math.random() * 100),
        carbonFootprint: Math.floor(Math.random() * 100) + 20
      };
    });
  };

  const generateOrderData = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
    return months.map(month => ({
      month,
      spend: Math.floor(Math.random() * 200000) + 100000,
      orders: Math.floor(Math.random() * 80) + 20,
      suppliers: Math.floor(Math.random() * 30) + 10,
      avgValue: Math.floor(Math.random() * 5000) + 2000,
      efficiency: Math.floor(Math.random() * 30) + 70
    }));
  };

  const generateSupplierAlerts = (suppliers, orders) => {
    const newAlerts = [];
    
    suppliers.forEach((supplier, index) => {
      if (supplier.riskScore > 70) {
        newAlerts.push({
          id: `risk-${supplier.id}`,
          type: 'critical',
          title: 'Critical Risk Alert',
          message: `${supplier.name} requires immediate attention - Risk Score: ${supplier.riskScore}%`,
          severity: 'error',
          timestamp: new Date(),
          action: 'Review supplier'
        });
      }
      
      if (supplier.onTimeDelivery < 75) {
        newAlerts.push({
          id: `delivery-${supplier.id}`,
          type: 'performance',
          title: 'Performance Degradation',
          message: `${supplier.name} delivery performance dropped to ${supplier.onTimeDelivery}%`,
          severity: 'warning',
          timestamp: new Date(),
          action: 'Schedule review'
        });
      }

      if (index < 2) {
        newAlerts.push({
          id: `opportunity-${supplier.id}`,
          type: 'opportunity',
          title: 'Cost Optimization Opportunity',
          message: `Potential 12% savings with ${supplier.name} through volume negotiations`,
          severity: 'success',
          timestamp: new Date(),
          action: 'Explore savings'
        });
      }
    });
    
    setAlerts(newAlerts);
  };

  const loadMockData = () => {
    const mockData = generateEnhancedSupplierData();
    setSupplierData(mockData);
    generateSupplierAlerts(mockData, []);
  };

  // Analytics and insights
  const supplierMetrics = useMemo(() => {
    if (!supplierData.length) return {};
    
    const totalSuppliers = supplierData.length;
    const criticalSuppliers = supplierData.filter(s => s.riskLevel === 'High').length;
    const avgPerformance = Math.round(supplierData.reduce((sum, s) => sum + s.onTimeDelivery, 0) / totalSuppliers);
    const totalSpend = supplierData.reduce((sum, s) => sum + s.totalSpend, 0);
    const avgAIScore = Math.round(supplierData.reduce((sum, s) => sum + s.aiScore, 0) / totalSuppliers);
    
    return {
      totalSuppliers,
      criticalSuppliers,
      avgPerformance,
      totalSpend,
      avgAIScore,
      growthTrend: Math.random() > 0.5 ? 'up' : 'down',
      efficiencyGain: Math.floor(Math.random() * 15) + 5
    };
  }, [supplierData]);

  // Modern Sidebar Component
  const ModernSidebar = () => (
    <div className={`fixed left-0 top-0 h-full bg-white/80 backdrop-blur-xl border-r border-gray-200/50 transition-all duration-300 z-40 ${
      sidebarCollapsed ? 'w-20' : 'w-72'
    }`}>
      <div className="flex flex-col h-full">
        {/* Logo and Brand */}
        <div className="p-6 border-b border-gray-200/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Layers className="w-6 h-6 text-white" />
              </div>
              {!sidebarCollapsed && (
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    SupplyAI
                  </h1>
                  <p className="text-xs text-gray-500">Intelligent Supply Chain</p>
                </div>
              )}
            </div>
            <button 
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {navigationItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center p-3 rounded-xl transition-all duration-200 group ${
                  activeTab === item.id 
                    ? 'bg-gradient-to-r ' + item.color + ' text-white shadow-lg' 
                    : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                }`}
              >
                <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                  activeTab === item.id ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  <item.icon className={`w-5 h-5 ${
                    activeTab === item.id ? 'text-white' : 'text-gray-600'
                  }`} />
                </div>
                {!sidebarCollapsed && (
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className={`text-xs ${
                      activeTab === item.id ? 'text-white/80' : 'text-gray-500'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                )}
                {!sidebarCollapsed && activeTab === item.id && (
                  <ChevronRight className="w-4 h-4 text-white/80" />
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Quick Actions */}
        {!sidebarCollapsed && (
          <div className="p-4 border-t border-gray-200/50">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-3">
                <Brain className="w-5 h-5 text-indigo-600" />
                <span className="text-sm font-semibold text-indigo-900">AI Assistant</span>
              </div>
              <p className="text-xs text-indigo-700 mb-3">
                Get AI-powered insights and recommendations
              </p>
              <button className="w-full bg-indigo-600 text-white text-xs py-2 px-3 rounded-lg hover:bg-indigo-700 transition-colors">
                Ask AI
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Modern Header Component
  const ModernHeader = () => (
    <header className={`fixed top-0 right-0 h-16 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 z-30 transition-all duration-300 ${
      sidebarCollapsed ? 'left-20' : 'left-72'
    }`}>
      <div className="h-full px-6 flex items-center justify-between">
        {/* Search and Breadcrumb */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Supply Chain</span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-semibold text-gray-900 capitalize">{activeTab}</span>
          </div>
        </div>

        {/* Quick Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search suppliers, orders, insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border-0 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <RefreshCw className="w-4 h-4 text-gray-600" />
          </button>
          
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
            >
              <Bell className="w-4 h-4 text-gray-600" />
              {alerts.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {alerts.length}
                </span>
              )}
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                  <p className="text-sm text-gray-500">{alerts.length} new alerts</p>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {alerts.slice(0, 5).map(alert => (
                    <div key={alert.id} className="p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          alert.severity === 'error' ? 'bg-red-500' :
                          alert.severity === 'warning' ? 'bg-yellow-500' :
                          'bg-green-500'
                        }`}></div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm">{alert.title}</h4>
                          <p className="text-xs text-gray-600 mt-1">{alert.message}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-gray-400">
                              {alert.timestamp.toLocaleTimeString()}
                            </span>
                            <button className="text-xs text-blue-600 hover:text-blue-700">
                              {alert.action}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Settings className="w-4 h-4 text-gray-600" />
          </button>

          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-xs font-semibold text-white">JZ</span>
          </div>
        </div>
      </div>
    </header>
  );

  // Modern Metric Card
  const MetricCard = ({ title, value, change, icon: Icon, gradient, trend }) => (
    <div className="bg-white rounded-2xl border border-gray-200/50 p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className={`flex items-center space-x-1 text-sm font-semibold ${
          trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600'
        }`}>
          {trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : 
           trend === 'down' ? <ArrowDownRight className="w-4 h-4" /> : null}
          <span>{change}</span>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  );

  // Overview Dashboard
  const OverviewDashboard = () => (
    <div className="space-y-8">
      {/* Hero Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Active Suppliers"
          value={supplierMetrics.totalSuppliers || 0}
          change="+12%"
          icon={Users}
          gradient="from-blue-500 to-cyan-400"
          trend="up"
        />
        <MetricCard
          title="Total Spend"
          value={`$${((supplierMetrics.totalSpend || 0) / 1000000).toFixed(1)}M`}
          change="+8.2%"
          icon={DollarSign}
          gradient="from-emerald-500 to-teal-400"
          trend="up"
        />
        <MetricCard
          title="Performance Score"
          value={`${supplierMetrics.avgPerformance || 0}%`}
          change="+3.1%"
          icon={Gauge}
          gradient="from-purple-500 to-pink-400"
          trend="up"
        />
        <MetricCard
          title="Critical Risks"
          value={supplierMetrics.criticalSuppliers || 0}
          change="-2"
          icon={AlertTriangle}
          gradient="from-orange-500 to-red-400"
          trend="down"
        />
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Spend Analysis */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200/50 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Spend Analysis</h3>
              <p className="text-sm text-gray-600">Monthly procurement trends and forecasting</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors">
                Month
              </button>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-lg">
                Quarter
              </button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={purchaseOrders}>
              <defs>
                <linearGradient id="spendGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
              <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12}} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value) => [`$${value.toLocaleString()}`, 'Spend']}
              />
              <Area 
                type="monotone" 
                dataKey="spend" 
                stroke="#3B82F6" 
                strokeWidth={3}
                fill="url(#spendGradient)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* AI Insights Panel */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200/50 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-indigo-900">AI Insights</h3>
              <p className="text-sm text-indigo-600">Powered by machine learning</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white/70 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-indigo-900">Cost Optimization</span>
                <span className="text-lg font-bold text-green-600">$2.3M</span>
              </div>
              <p className="text-xs text-gray-600">Potential annual savings identified through supplier consolidation</p>
            </div>
            
            <div className="bg-white/70 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-indigo-900">Risk Reduction</span>
                <span className="text-lg font-bold text-blue-600">87%</span>
              </div>
              <p className="text-xs text-gray-600">Geographic diversification can reduce supply chain risks</p>
            </div>
            
            <div className="bg-white/70 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-indigo-900">Performance Boost</span>
                <span className="text-lg font-bold text-purple-600">+15%</span>
              </div>
              <p className="text-xs text-gray-600">Predicted improvement with recommended supplier changes</p>
            </div>
          </div>
          
          <button className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200">
            View All Insights
          </button>
        </div>
      </div>

      {/* Supplier Performance Grid */}
      <div className="bg-white rounded-2xl border border-gray-200/50 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Top Performing Suppliers</h3>
            <p className="text-sm text-gray-600">Based on AI performance scoring and analytics</p>
          </div>
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold text-sm">
            <span>View All</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {supplierData.slice(0, 6).map(supplier => (
            <div key={supplier.id} className="border border-gray-200/50 rounded-xl p-4 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-700">
                      {supplier.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{supplier.name}</h4>
                    <p className="text-xs text-gray-500">{supplier.category}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  supplier.riskLevel === 'Low' ? 'bg-green-100 text-green-800' :
                  supplier.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {supplier.riskLevel}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-gray-500">Performance</span>
                  <div className="font-semibold text-gray-900">{supplier.onTimeDelivery}%</div>
                </div>
                <div>
                  <span className="text-gray-500">AI Score</span>
                  <div className="font-semibold text-gray-900">{supplier.aiScore}</div>
                </div>
                <div>
                  <span className="text-gray-500">Spend</span>
                  <div className="font-semibold text-gray-900">${(supplier.totalSpent/1000).toFixed(0)}K</div>
                </div>
                <div>
                  <span className="text-gray-500">Orders</span>
                  <div className="font-semibold text-gray-900">{supplier.orderCount}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl border border-gray-200/50 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
          <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">View All</button>
        </div>
        <div className="space-y-4">
          {alerts.slice(0, 5).map(alert => (
            <div key={alert.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
              <div className={`w-2 h-2 rounded-full ${
                alert.severity === 'error' ? 'bg-red-500' :
                alert.severity === 'warning' ? 'bg-yellow-500' :
                'bg-green-500'
              }`}></div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm">{alert.title}</h4>
                <p className="text-xs text-gray-600">{alert.message}</p>
              </div>
              <div className="text-xs text-gray-400">
                {alert.timestamp.toLocaleTimeString()}
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-xs font-semibold px-3 py-1 bg-blue-50 rounded-lg">
                {alert.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Placeholder components for other tabs
  const SuppliersView = () => (
    <div className="bg-white rounded-2xl border border-gray-200/50 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Supplier Management</h2>
      <p className="text-gray-600">Advanced supplier directory and management tools coming here...</p>
    </div>
  );

  const AnalyticsView = () => (
    <div className="bg-white rounded-2xl border border-gray-200/50 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Analytics</h2>
      <p className="text-gray-600">AI-powered analytics and predictive insights coming here...</p>
    </div>
  );

  const RiskCenterView = () => (
    <div className="bg-white rounded-2xl border border-gray-200/50 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Risk Management Center</h2>
      <p className="text-gray-600">Comprehensive risk assessment and mitigation tools coming here...</p>
    </div>
  );

  const AutomationView = () => (
    <div className="bg-white rounded-2xl border border-gray-200/50 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Workflow Automation</h2>
      <p className="text-gray-600">Intelligent automation and AI-driven recommendations coming here...</p>
    </div>
  );

  const InsightsView = () => (
    <div className="bg-white rounded-2xl border border-gray-200/50 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Intelligence</h2>
      <p className="text-gray-600">Advanced reporting and business intelligence dashboard coming here...</p>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 animate-pulse">
            <Layers className="w-8 h-8 text-white" />
          </div>
          <p className="text-gray-600 font-semibold">Loading intelligent supply chain data...</p>
          <p className="text-sm text-gray-500 mt-1">Connecting to Odoo and analyzing patterns</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ModernSidebar />
      <ModernHeader />
      
      {/* Main Content */}
      <main className={`pt-20 pb-8 transition-all duration-300 ${
        sidebarCollapsed ? 'ml-20' : 'ml-72'
      }`}>
        <div className="px-8">
          {activeTab === 'overview' && <OverviewDashboard />}
          {activeTab === 'suppliers' && <SuppliersView />}
          {activeTab === 'analytics' && <AnalyticsView />}
          {activeTab === 'risks' && <RiskCenterView />}
          {activeTab === 'automation' && <AutomationView />}
          {activeTab === 'reports' && <InsightsView />}
        </div>
      </main>

      {/* Click outside to close notifications */}
      {showNotifications && (
        <div 
          className="fixed inset-0 z-20" 
          onClick={() => setShowNotifications(false)}
        ></div>
      )}
    </div>
  );
};

export default ModernSupplyChainOptimizer;