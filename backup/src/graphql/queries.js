/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCat = /* GraphQL */ `
  query GetCat($id: ID!) {
    getCat(id: $id) {
      id
      name
      color
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCats = /* GraphQL */ `
  query ListCats(
    $filter: ModelCatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        color
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCats = /* GraphQL */ `
  query SyncCats(
    $filter: ModelCatFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCats(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        color
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
