const {getNamedAccounts, deployments, network, ethers} = require('hardhat')

async function main() {
    // Deploying DappToken
    const DappTokenFactory = await ethers.getContractFactory("DappToken")
  console.log("Deploying contract...")
  const DappToken = await DappTokenFactory.deploy()
  await DappToken.deployed()
  console.log(`Deployed contract to: ${DappToken.address}`)
  console.log('------------------------------------------------')


  // Deploying DaiToken
  const DaiTokenFactory = await ethers.getContractFactory("DaiToken")
  console.log("Deploying contract...")
  const DaiToken = await DaiTokenFactory.deploy()
  await DaiToken.deployed()
  console.log(`Deployed contract to: ${DaiToken.address}`)
  console.log('------------------------------------------------')


  // Deploying TokenFarm
  const TokenFarmFactory = await ethers.getContractFactory("TokenFarm")
  console.log("Deploying contract...")
  const TokenFarm = await TokenFarmFactory.deploy(DappToken.address,DaiToken.address)
  await TokenFarm.deployed()
  console.log(`Deployed contract to: ${TokenFarm.address}`)
  console.log('------------------------------------------------')

  // Transfer all tokens to TokenFarm (1 million)
  const val = await DappToken.transfer(TokenFarm.address, '1000000000000000000000000')
  console.log(val)

    // Transfer 100 Mock DAI tokens to investor
    //await DaiToken.transfer("0xDaB39ad20C76450a7283F7FA1F57Dba788cEc94A", '100000000000000000000')
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })