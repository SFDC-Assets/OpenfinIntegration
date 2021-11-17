public with sharing class OpenfinSFDataRetriever {

    @AuraEnabled
    public static String getECNNumber(String sfRecordID) {
        //      Change it to ECN_pc if you are using  FSC org 
        //      List<Account> lstAcct = [Select ECN__pc FROM Account WHERE Id = :sfRecordID];
        List<Account> lstAcct = [Select ECN__c  FROM Account WHERE Id = :sfRecordID];
        return lstAcct[0]. ECN__c;
    }
    @AuraEnabled
    public static String getSFRecordID(String ecnID) {
        //      Change it to ECN_pc if you are in FSC org 
        List<Account> lstAcct = [SELECT Id FROM Account WHERE ECN__c = :ecnID];
        return lstAcct[0].Id;  
    }
}