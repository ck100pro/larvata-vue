orgs = [
  { name: '大聯盟' },
  { name: '小聯盟' },
  { name: '種花電信' },
  { name: 'A錢中油' },
  { name: '台Ｇ電' }
]

orgs.each do |org|
  Org.find_or_create_by(name: org[:name])
end