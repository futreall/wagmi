import { expect, test } from 'vitest'

import * as core from './index.js'

test('exports', () => {
  expect(Object.keys(core)).toMatchInlineSnapshot(`
    [
      "call",
      "connect",
      "disconnect",
      "estimateGas",
      "estimateFeesPerGas",
      "estimateMaxPriorityFeePerGas",
      "getAccount",
      "getBalance",
      "fetchBalance",
      "getBlock",
      "getBlockNumber",
      "fetchBlockNumber",
      "getBlockTransactionCount",
      "getChainId",
      "getClient",
      "getConnections",
      "getConnectors",
      "getConnectorClient",
      "getEnsAddress",
      "fetchEnsAddress",
      "getEnsAvatar",
      "fetchEnsAvatar",
      "getEnsName",
      "fetchEnsName",
      "getEnsResolver",
      "fetchEnsResolver",
      "getFeeHistory",
      "getGasPrice",
      "getProof",
      "getPublicClient",
      "getToken",
      "fetchToken",
      "getTransaction",
      "fetchTransaction",
      "getTransactionCount",
      "getWalletClient",
      "multicall",
      "readContract",
      "readContracts",
      "reconnect",
      "sendTransaction",
      "signMessage",
      "signTypedData",
      "simulateContract",
      "switchAccount",
      "switchChain",
      "switchNetwork",
      "verifyMessage",
      "verifyTypedData",
      "watchAccount",
      "watchBlocks",
      "watchBlockNumber",
      "watchChainId",
      "watchClient",
      "watchConnections",
      "watchConnectors",
      "watchContractEvent",
      "watchPendingTransactions",
      "watchPublicClient",
      "waitForTransactionReceipt",
      "waitForTransaction",
      "writeContract",
      "createConnector",
      "injected",
      "mock",
      "createConfig",
      "createStorage",
      "noopStorage",
      "hydrate",
      "BaseError",
      "ChainNotConfiguredError",
      "ConnectorNotConnectedError",
      "ConnectorAlreadyConnectedError",
      "ConnectorNotFoundError",
      "ConnectorAccountNotFoundError",
      "ProviderNotFoundError",
      "SwitchChainNotSupportedError",
      "custom",
      "http",
      "webSocket",
      "unstable_connector",
      "fallback",
      "cookieStorage",
      "cookieToInitialState",
      "parseCookie",
      "deepEqual",
      "deserialize",
      "normalizeChainId",
      "serialize",
      "version",
    ]
  `)
})