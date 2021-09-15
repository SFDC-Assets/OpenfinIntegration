public with sharing class OpenfinSFDataRetriever {

    @AuraEnabled
    public static String getECNNumber(String sfRecordID) {
        List<Account> lstAcct = [Select ECN__pc FROM Account WHERE Id = :sfRecordID];
        return lstAcct[0].ECN__pc;
    }
    @AuraEnabled
    public static String getSFRecordID(String ecnID) {
        List<Account> lstAcct = [SELECT Id FROM Account WHERE ECN__pc = :ecnID];
        return lstAcct[0].Id;  
    }
}
