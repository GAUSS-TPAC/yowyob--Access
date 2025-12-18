package com.yowyob_access.access.exceptions;

//Exception thrown when a role cannot be found for a given tenant.
public class RoleNotFoundException extends RuntimeException {

     //Construct the exception with a detailed message.
     
    public RoleNotFoundException(String message) {
        super(message);
    }
}
