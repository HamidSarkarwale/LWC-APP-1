public with sharing class AccountManager 
{
    @AuraEnabled(cacheable=false)
    public static List<Account> getAccounts(Integer NumberOfAccounts) {
        
        return [SELECT Id, Name, Phone, Website FROM Account LIMIT :NumberOfAccounts ];
    }
}
