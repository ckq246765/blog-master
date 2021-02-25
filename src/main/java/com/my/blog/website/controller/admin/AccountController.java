package com.my.blog.website.controller.admin;

import com.my.blog.website.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import javax.servlet.http.HttpServletRequest;


/**
 * PackageName: com.my.blog.website.controller.admin
 * ClassName: AccountController
 * Description:
 *
 * @Date: 2021/2/17 22:52
 * @Author:陈克齐
 */
@Controller
@RequestMapping("admin/account")
public class AccountController extends BaseController {

    @GetMapping(value = "")
    public String index(HttpServletRequest request) {
        return "admin/account";
    }
}
